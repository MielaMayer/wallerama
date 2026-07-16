import { links } from "@/content";

const IMG = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

function PdfPage({ src, alt }: { src: string; alt: string }) {
  return (
    <img src={IMG(src)} alt={alt} className="mx-auto block w-full max-w-3xl" />
  );
}

function LinkButton({
  href,
  children,
  solid = false,
}: {
  href: string;
  children: string;
  solid?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        "rounded-full px-6 py-2.5 font-title text-sm tracking-wide transition " +
        (solid
          ? "bg-gold text-forest-3 hover:brightness-110"
          : "border border-gold text-cream hover:bg-gold/15")
      }
    >
      {children}
    </a>
  );
}

/** cream card interstitial that sits between PDF pages */
function Snippet({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto my-2 w-full max-w-2xl rounded-2xl border-2 border-gold bg-cream/95 px-6 py-5 text-center text-ink shadow-[0_6px_0_rgba(0,0,0,0.18)]">
      {children}
    </div>
  );
}

export default function App() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-6">
      {/* ---- PAGE 1 · POSTER ---- */}
      <PdfPage src="poster.png" alt="Wallerama Summer Fest 2026 · July 17–19 · Gateway Mendocino, Hopland CA" />

      {/* snippet: RSVP + key links */}
      <Snippet>
        <div className="mb-3 font-title text-lg tracking-[0.15em] text-forest">
          RSVP · CONTRIBUTE · COORDINATE
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <LinkButton href={links.partiful} solid>RSVP on Partiful</LinkButton>
          <LinkButton href={links.contributeForm}>Contribute a thing</LinkButton>
          <LinkButton href={links.whatsapp}>Join WhatsApp</LinkButton>
          <LinkButton href={links.ridesGearSheet}>Rides &amp; gear sheet</LinkButton>
        </div>
        <div className="mt-3 text-sm text-ink/70">
          Venmo{" "}
          <a href={links.venmo} target="_blank" rel="noreferrer" className="font-semibold underline">
            @Miela-Mayer
          </a>{" "}
          to lock your spot · $60 weekend + optional $40 food program
        </div>
      </Snippet>

      {/* ---- PAGE 2 · VENUE MAP ---- */}
      <PdfPage src="venuemap.png" alt="Wallerama venue map — Gateway Mendocino" />

      {/* snippet: birthdays */}
      <Snippet>
        <div className="font-body text-lg italic">
          🎂 bdays being celebrated this fine weekend: <br className="sm:hidden" />
          <span className="font-semibold not-italic">
            Preeti Iyer · Timour Kosters · Cedric Whitney · Jono Kline · Miela Mayer
          </span>{" "}
          :)
        </div>
      </Snippet>

      {/* ---- PAGE 3 · WHAT TO EXPECT + LINEUP ---- */}
      <PdfPage src="page3.png" alt="What to Expect, Daily Themes, and Lineup" />

      {/* snippet: volunteer callout */}
      <Snippet>
        <div className="font-title text-base tracking-wide text-forest">🛠️ CALLING VOLUNTEERS</div>
        <div className="mt-1 font-body text-lg">
          Seeking pals to help with sediment teardown — any and all volunteers welcome
          starting <span className="font-semibold">12 PM on Friday</span> :)
        </div>
      </Snippet>

      {/* ---- PAGE 4 · WHAT TO BRING + REMINDERS ---- */}
      <PdfPage src="page4.png" alt="What to Bring, Food Program, and Important Reminders" />

      {/* footer snippet: all the links, live */}
      <Snippet>
        <div className="mb-3 font-title text-lg tracking-[0.15em] text-forest">ALL THE LINKS</div>
        <div className="flex flex-wrap justify-center gap-3">
          <LinkButton href={links.partiful} solid>Partiful (RSVP)</LinkButton>
          <LinkButton href={links.contributeForm}>Attendance + contribute form</LinkButton>
          <LinkButton href={links.whatsapp}>WhatsApp group</LinkButton>
          <LinkButton href={links.ridesGearSheet}>Rides &amp; gear sheet</LinkButton>
          <LinkButton href={links.venue}>Venue gallery</LinkButton>
        </div>
        <div className="mt-4 font-title text-sm tracking-[0.2em] text-forest/70">
          GATEWAY MENDOCINO · JULY 17–19
        </div>
      </Snippet>
    </main>
  );
}
