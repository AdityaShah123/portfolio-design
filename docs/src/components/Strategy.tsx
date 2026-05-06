import { useState, useEffect } from "react";

// ─── Dynamic asset loading ────────────────────────────────────────────────────
const allStrategyImages = import.meta.glob<{ default: string }>(
  "/src/assets/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

console.log("chamba images found:", Object.keys(allStrategyImages));

function getStrategyPics(folder: string): string[] {
  const prefix = `/src/assets/${folder}/`;
  return Object.entries(allStrategyImages)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => {
      const n = (p: string) => parseInt(p.replace(prefix, "").split(".")[0], 10);
      return n(a) - n(b);
    })
    .map(([, mod]) => mod.default);
}

type Case = {
  num: string;
  client: string;
  brief: string;
  // tag: string;
  images: string[];
};

const cases: Case[] = [
  {
    num: "B/01",
    client: "Chamba, Himachal Pradesh",
    brief: "Some research you do in a library. Some you have to go find yourself. Walked the town, sat with artisans, photographed the temples, ate the food, and tried to understand what a place looks like when craft is still part of daily life and not just yet a  tourist souvenir.",
    // tag: "Brand voice × Content",
    images: getStrategyPics("chamba"),
  },
  {
    num: "B/02",
    client: "President of Dorms, RHA at Fashion Institute of Technology, New York ",
    brief: "New York has a way of making everyone feel like the main character. My job was making sure that feeling extended past the studio and into the dorm. Turns out, community doesn't just happen. Someone has to order the burfi, set up the candles, and make sure there's enough henna for everyone. That someone was me :)",
    // tag: "Audience × Storytelling",
    images: getStrategyPics("RHA PRESIDENT"),
  },
  {
    num: "B/03",
    client: "Desi in the City",
    brief: " Being Indian at a New York design school means you're constantly translating yourself for a room that's never quite seen your reference points before. As Social Media Manager of the Indian Cultural Society at FIT, I made sure our corner of campus had a voice worth following.  The diaspora needed a seat at the table. I just helped set it.",
    // tag: "Live event · Brand",
    images: getStrategyPics("ICS "),
  },
  {
    num: "B/04",
    client: "We The People: Smart India Hackathon ",
    brief: "The Constitution is 395 articles long. Most people haven't read past the Preamble. We built a fun digitalised board game that makes the Constitution something every Indian over 13 actually wants to engage with",
    // tag: "Game design × Civic",
    images: getStrategyPics("SMART INDIA HACKATHON 2024 (1)"),
  },
  {
    num: "B/05",
    client: "NXT Magazine",
    brief: "Every campus has a pulse. Most people just don't bother writing it down. A full trends magazine for NIFT Kangra, designed from scratch, cover to last page.",
    // tag: "Game design × Civic",
    images: getStrategyPics("MAGAZINE 2 "),
  },
];

const ImagePopup = ({
  c,
  onClose,
}: {
  c: Case;
  onClose: () => void;
}) => {
  const [index, setIndex] = useState(0);
 
  useEffect(() => {
    if (c.images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % c.images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [c.images]);
 
  // close on backdrop click
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[90vw] max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        {/* <button
          onClick={onClose}
          className="absolute -top-10 right-0 eyebrow text-paper/60 hover:text-paper transition-colors"
        >
          Close ✕
        </button> */}
 
        {/* client label */}
        <p className="eyebrow text-sand mb-3">{c.num} — {c.client}</p>
 
        {/* rotating image */}
        <div className="relative aspect-square overflow-hidden bg-paper/10 rounded-sm">
          {c.images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
              style={{ opacity: i === index ? 1 : 0 }}
            />
          ))}
        </div>
 
        {/* dot indicators */}
        {c.images.length > 1 && (
          <div className="flex gap-2 justify-center mt-4">
            {c.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === index ? "bg-paper" : "bg-paper/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
 
// ─── Strategy ─────────────────────────────────────────────────────────────────
const Strategy = () => {
  const [activeCase, setActiveCase] = useState<Case | null>(null);
 
  return (
    <section id="strategy" className="py-24 md:py-36 bg-ink text-paper grain relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
 
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-16 md:mb-24 items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow text-sand mb-4">§ 04 — Selected Works · B</p>
            <h2 className="font-serif text-[clamp(3rem,8vw,8rem)] leading-[0.95]">
              Outside the
              <span className="italic text-sand"> studio</span>
            </h2>
          </div>
          {/* <p className="col-span-12 md:col-span-3 md:col-start-10 font-serif text-xl text-sand/80 text-pretty">
            A few briefs — internship work, campus events, hackathons, a personal feed. Treated like agency work. Written before the deck, not after.
          </p> */}
        </div>
 
        {/* 2-per-row grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px border-t border-paper/15">
          {cases.map((c) => (
            <div key={c.num} className="py-12 px-6 border-b border-paper/15">
              <p className="eyebrow text-sand mb-3">{c.num}</p>
 
              {/* Clickable heading */}
              <button
                onClick={() => c.images.length > 0 && setActiveCase(c)}
                className={`text-left group ${c.images.length > 0 ? "cursor-pointer" : "cursor-default"}`}
              >
                <h3 className="font-serif text-3xl md:text-4xl text-paper italic leading-none mb-1 group-hover:text-sand transition-colors duration-200">
                  {c.client}
                  {c.images.length > 0 && (
                    <span className="ml-3 text-base not-italic text-sand/50 group-hover:text-sand transition-colors">
                      ↗
                    </span>
                  )}
                </h3>
              </button>
 
              <p className="eyebrow !text-amber-50/90 mt-4 mb-4">{c.brief}</p>
              {/* <span className="inline-block px-3 py-1 eyebrow border border-paper/30 rounded-full text-paper/80">
                {c.tag}
              </span> */}
            </div>
          ))}
        </div>
 
      </div>
 
      {/* Popup */}
      {activeCase && (
        <ImagePopup c={activeCase} onClose={() => setActiveCase(null)} />
      )}
    </section>
  );
};
 
export default Strategy;