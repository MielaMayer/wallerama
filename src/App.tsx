import { EditProvider, Editable, AdminBar } from "@/lib/editable";
import Lineup from "@/components/Lineup";
import {
  links,
  expect as expectContent,
  bring,
  foodProgram,
  reminders,
} from "@/content";

const IMG = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

/** render a reminder string with {token} link placeholders */
function Reminder({ text }: { text: string }) {
  const map: Record<string, { href: string; label: string }> = {
    sheet: { href: links.ridesGearSheet, label: "Sheet" },
    whatsapp: { href: links.whatsapp, label: "WhatsApp group" },
    partiful: { href: links.partiful, label: "Partiful" },
    form: { href: links.contributeForm, label: "fill out the form" },
    venmo: { href: links.venmo, label: "@Miela-Mayer" },
  };
  const parts = text.split(/(\{[a-z]+\})/g);
  return (
    <>
      {parts.map((p, i) => {
        const m = p.match(/^\{([a-z]+)\}$/);
        if (m && map[m[1]]) {
          const { href, label } = map[m[1]];
          return (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gold underline decoration-gold/50 underline-offset-2 hover:text-cream"
            >
              {label}
            </a>
          );
        }
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <div className="mx-auto mb-8 w-fit">
      <div className="ribbon rounded-2xl px-10 py-2 text-center font-title text-3xl font-bold tracking-[0.15em] md:text-4xl">
        {children}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <EditProvider>
      <main className="mx-auto max-w-5xl">
        {/* ---------- PAGE 1 · POSTER (image) ---------- */}
        <section className="bg-forest-3">
          <img
            src={IMG("poster.png")}
            alt="Wallerama Summer Fest 2026 · July 17–19 · Gateway Mendocino, Hopland CA"
            className="mx-auto block w-full max-w-3xl"
          />
          <nav className="flex flex-wrap justify-center gap-3 bg-forest-3 pb-8 font-title text-sm tracking-wide">
            <a href={links.partiful} target="_blank" rel="noreferrer" className="rounded-full bg-gold px-5 py-2 text-forest-3">
              RSVP on Partiful
            </a>
            <a href={links.contributeForm} target="_blank" rel="noreferrer" className="rounded-full border border-gold px-5 py-2 text-cream">
              Contribute a thing
            </a>
            <a href={links.whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-gold px-5 py-2 text-cream">
              Join WhatsApp
            </a>
          </nav>
        </section>

        {/* ---------- PAGE 2 · VENUE MAP (image) ---------- */}
        <section className="bg-forest-3 pb-6">
          <img
            src={IMG("venuemap.png")}
            alt="Wallerama venue map — Gateway Mendocino"
            className="mx-auto block w-full max-w-3xl"
          />
        </section>

        {/* ---------- PAGE 3 · WHAT TO EXPECT + LINEUP (live text) ---------- */}
        <section className="page-forest px-5 py-14 md:px-10">
          <img src={IMG("floral-top.png")} alt="" aria-hidden className="mx-auto mb-6 w-full max-w-md opacity-90" />
          <div className="relative z-10">
            <SectionTitle>WHAT TO EXPECT</SectionTitle>
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-cream/90">
              <Editable id="expect-body">{expectContent.body}</Editable>
            </p>

            <h3 className="mt-12 mb-6 text-center font-title text-2xl tracking-[0.2em] text-gold">
              ✦ DAILY THEMES ✦
            </h3>
            <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-8">
              {expectContent.themes.map((t, i) => (
                <div key={t.day} className="text-center">
                  <div className="text-4xl">{t.icon}</div>
                  <div className="mt-1 font-title text-lg tracking-widest text-cream">
                    <Editable id={`theme-day-${i}`}>{t.day.toUpperCase()}</Editable>
                  </div>
                  <div className="font-body text-cream/80">
                    <Editable id={`theme-name-${i}`}>{t.theme}</Editable>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <SectionTitle>LINEUP</SectionTitle>
              <Lineup />
            </div>

            <p className="mx-auto mt-12 max-w-3xl rounded-xl border border-gold/40 bg-forest-3/50 px-6 py-4 text-center font-body italic text-cream/85">
              <Editable id="birthdays">{expectContent.birthdays}</Editable>
            </p>
          </div>
        </section>

        {/* ---------- PAGE 4 · WHAT TO BRING + REMINDERS (live text) ---------- */}
        <section className="page-forest px-5 py-14 md:px-10">
          <div className="relative z-10">
            <SectionTitle>WHAT TO BRING</SectionTitle>

            <div className="grid gap-6 md:grid-cols-3">
              {bring.map((g, gi) => (
                <div key={g.heading} className="rounded-2xl border border-gold/30 bg-forest-3/40 p-5">
                  <h4 className="mb-3 flex items-center gap-2 font-title text-xl tracking-wide text-gold">
                    <span>{g.icon}</span>
                    <Editable id={`bring-h-${gi}`}>{g.heading}</Editable>
                  </h4>
                  <ul className="list-disc space-y-2 pl-5 text-cream/90 marker:text-gold">
                    {g.items.map((it, ii) => (
                      <li key={ii}>
                        <Editable id={`bring-${gi}-${ii}`}>{it}</Editable>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Food program card */}
              <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-gold bg-gold/10 p-6 text-center">
                <div className="font-title text-lg tracking-[0.2em] text-gold">FOOD PROGRAM</div>
                <div className="my-1 font-display text-4xl text-cream">{foodProgram.price}</div>
                <a href={links.venmo} target="_blank" rel="noreferrer" className="font-title text-lg text-cream underline decoration-gold/60 underline-offset-2">
                  VENMO {foodProgram.venmo}
                </a>
                <div className="mt-1 text-cream/80">{foodProgram.blurb}</div>
              </div>
            </div>

            <div className="mt-16">
              <SectionTitle>IMPORTANT REMINDERS</SectionTitle>
              <ul className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
                {reminders.map((r, i) => (
                  <li key={i} className="flex gap-3 rounded-xl border border-gold/30 bg-forest-3/40 px-5 py-4 text-cream/90">
                    <span className="text-gold">✦</span>
                    <span>
                      <Reminder text={r} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <footer className="mt-16 text-center font-title tracking-[0.2em] text-gold/80">
              GATEWAY MENDOCINO · JULY 17–19
            </footer>
          </div>
        </section>

        <AdminBar />
      </main>
    </EditProvider>
  );
}
