import { lineup, lineupNote, type Slot } from "@/content";
import { Editable } from "@/lib/editable";

const blockColor: Record<string, string> = {
  purple: "bg-purple/85 border-purple",
  olive: "bg-olive/85 border-olive",
  sky: "bg-sky/85 border-sky",
  tan: "bg-tan/90 border-tan text-ink",
  gold: "bg-gold/90 border-gold text-ink",
  rust: "bg-rust/85 border-rust",
};

function Card({ slot, id }: { slot: Slot; id: string }) {
  const tone = blockColor[slot.color] ?? "bg-purple/85 border-purple";
  return (
    <div className={`rounded-lg border ${tone} px-3 py-2 shadow-sm`}>
      <div className="font-title text-[11px] uppercase tracking-widest opacity-80">
        <Editable id={`${id}-time`}>{slot.time}</Editable>
      </div>
      <div className="font-body text-[15px] leading-snug">
        <Editable id={`${id}-title`}>{slot.title}</Editable>
      </div>
      {slot.note && (
        <div className="mt-0.5 text-[11px] italic opacity-75">
          <Editable id={`${id}-note`}>{slot.note}</Editable>
        </div>
      )}
    </div>
  );
}

export default function Lineup() {
  return (
    <div>
      <p className="mb-5 text-center font-body italic text-cream/70">{lineupNote}</p>
      <div className="grid gap-5 md:grid-cols-3">
        {lineup.map((col, ci) => (
          <div key={col.day}>
            <div className="ribbon mx-auto mb-4 w-fit rounded-full px-6 py-1 font-title text-lg font-semibold tracking-widest">
              {col.day.toUpperCase()}
            </div>
            <div className="flex flex-col gap-2.5">
              {col.slots.map((s, si) => (
                <Card key={si} slot={s} id={`ln-${ci}-${si}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
