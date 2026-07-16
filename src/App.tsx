import { links } from "@/content";

const IMG = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;
const AUDIO = `${import.meta.env.BASE_URL}audio/wallerama-ep1.m4a`;

function PodcastBanner() {
  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl border-2 border-gold bg-cream/95 px-6 py-5 text-center text-ink shadow-[0_6px_0_rgba(0,0,0,0.18)]">
      <div className="flex items-center justify-center gap-2 font-title text-xl font-bold tracking-wide text-forest">
        <span aria-hidden>▶</span> Start here: Wallerama podcast launch
      </div>
      <div className="mt-0.5 font-body text-base italic text-ink/70">
        pre-listening for the weekend · Episode 1
      </div>
      <audio
        controls
        preload="metadata"
        src={AUDIO}
        className="mt-4 w-full"
      >
        Your browser can't play this audio — use the download link below.
      </audio>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-sm">
        <a
          href={AUDIO}
          download="Wallerama-Podcast-Ep1.m4a"
          className="rounded-full bg-gold px-5 py-2 font-title tracking-wide text-forest-3 transition hover:brightness-110"
        >
          ⬇ Download audio
        </a>
        <a
          href={links.podcastDrive}
          target="_blank"
          rel="noreferrer"
          className="font-title tracking-wide text-forest underline underline-offset-2 hover:text-gold"
        >
          Open in Google Drive
        </a>
      </div>
    </div>
  );
}

function PdfPage({ src, alt }: { src: string; alt: string }) {
  return (
    <img src={IMG(src)} alt={alt} className="mx-auto block w-full max-w-3xl" />
  );
}

function LinkButton({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full bg-gold px-6 py-2.5 font-title text-sm tracking-wide text-forest-3 transition hover:brightness-110"
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
      {/* ---- PODCAST · start here ---- */}
      <PodcastBanner />

      {/* ---- PAGE 1 · POSTER ---- */}
      <PdfPage src="poster.png" alt="Wallerama Summer Fest 2026 · July 17–19 · Gateway Mendocino, Hopland CA" />

      {/* snippet: just the buttons, on the green background */}
      <div className="flex flex-wrap justify-center gap-3">
        <LinkButton href={links.partiful}>RSVP on Partiful</LinkButton>
        <LinkButton href={links.contributeForm}>Contribute a thing</LinkButton>
        <LinkButton href={links.whatsapp}>Join WhatsApp</LinkButton>
        <LinkButton href={links.ridesGearSheet}>Rides &amp; gear sheet</LinkButton>
      </div>

      {/* ---- PAGE 2 · VENUE MAP ---- */}
      <PdfPage src="venuemap.png" alt="Wallerama venue map — Gateway Mendocino" />

      {/* snippet: birthdays — subtle, on the green background */}
      <p className="max-w-2xl px-4 text-center font-body text-base italic text-cream/70">
        🎂 birthdays this weekend: Preeti Iyer · Timour Kosters · Cedric Whitney · Jono Kline · Miela Mayer :)
      </p>

      {/* ---- PAGE 3 · WHAT TO EXPECT + LINEUP ---- */}
      <PdfPage src="page3.png" alt="What to Expect, Daily Themes, and Lineup" />

      {/* snippet: volunteer callout */}
      <Snippet>
        <div className="font-title text-lg tracking-wide text-forest">👀 volunteers 👀</div>
        <div className="mt-1 font-body text-lg">
          Seeking pals to help with set up and tear down — any and all volunteers welcome
          starting <span className="font-semibold">12 PM on Friday</span> :)
        </div>
      </Snippet>

      {/* ---- PAGE 4 · WHAT TO BRING + REMINDERS ---- */}
      <PdfPage src="page4.png" alt="What to Bring, Food Program, and Important Reminders" />

      {/* footer snippet: all the links, live */}
      <Snippet>
        <div className="mb-3 font-title text-lg tracking-[0.15em] text-forest">links links links</div>
        <div className="flex flex-wrap justify-center gap-3">
          <LinkButton href={links.partiful}>Partiful (RSVP)</LinkButton>
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
