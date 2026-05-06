const hooks = [
  "“Have you ever felt that knot in your stomach just before a bold career move?”",
  "“We all face moments when others seem to have it easier. Yeah, me too.”",
  "“Adjusting to a new place is mostly just learning where to keep your sadness.”",
  "“NIFT didn't teach me design. It taught me that design is mostly a deadline.”",
  "“The best caption I wrote this week was a voice note to a friend.”",
];

const reels = [
  {
    title: "POV: a NIFT first-year, three weeks in",
    type: "Reel · 22 sec",
    hook: "First three seconds: a half-unpacked suitcase, a chai, a quiet sigh.",
  },
  {
    title: "Three things college didn't put in the brochure",
    type: "Carousel · 6 slides",
    hook: "Slide one: the word 'homesick' in 200pt serif.",
  },
  {
    title: "I taught a brush-lettering workshop online — here's what actually clicked",
    type: "Reel · 38 sec",
    hook: "A pen, a page, and one student saying 'oh.' That's the ad.",
  },
];

const stories = [
  {
    label: "LinkedIn",
    title: "What if it all falls apart? — a small note on bold career moves.",
    body: "Three paragraphs about the day I realised choosing accessory design at NIFT meant choosing a question over an answer. Ends on a question, not a plan.",
  },
  {
    label: "Workshop",
    title: "Online brush-lettering, for people who can't draw a straight line.",
    body: "A workshop I designed and taught — built around the idea that lettering is less about the hand and more about how patient you are with the page.",
  },
  {
    label: "Anchoring",
    title: "Spectrum '24 — scripts for a runway that wasn't sure what it was.",
    body: "Anchoring scripts written between rehearsals; voice notes turned into one-liners turned into the spine of the show. The audience laughed in the right places.",
  },
];

const Stories = () => (
  <section id="stories" className="py-24 md:py-36">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
      {/* header */}
      <div className="grid grid-cols-12 gap-6 md:gap-12 mb-16 md:mb-24">
        <div className="col-span-12 md:col-span-9">
          <p className="eyebrow mb-4">§ 05 — Selected Works · C</p>
          <h2 className="font-serif text-[clamp(3rem,8vw,8rem)] leading-[0.95] text-ink">
            Words, hooks &amp; <span className="italic text-rose">small loud things.</span>
          </h2>
        </div>
        <p className="col-span-12 md:col-span-3 font-serif text-xl text-bark text-pretty md:mt-12">
          A creator portfolio inside the portfolio — scripts, captions, openers and the line a stranger sent back.
        </p>
      </div>

      {/* Hooks I'd stop scrolling for */}
      <div className="mb-24 md:mb-32">
        <div className="flex items-baseline justify-between mb-8 border-b border-border pb-4">
          <h3 className="font-serif text-3xl md:text-4xl italic text-ink">
            Openers I've actually used
          </h3>
          <p className="eyebrow text-bark">a working list</p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {hooks.map((h, i) => (
            <li key={i} className="flex gap-4 group">
              <span className="font-serif text-2xl text-clay leading-none pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-serif text-2xl md:text-3xl text-ink leading-snug text-pretty group-hover:text-clay transition-colors duration-500">
                {h}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Campaign ideas / reels */}
      <div className="mb-24 md:mb-32">
        <div className="flex items-baseline justify-between mb-8 border-b border-border pb-4">
          <h3 className="font-serif text-3xl md:text-4xl italic text-ink">
            Reels &amp; carousels I'd run
          </h3>
          <p className="eyebrow text-bark">scripts, stage one</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reels.map((r, i) => (
            <article
              key={i}
              className="group relative bg-paper-soft border border-border p-7 md:p-9 hover:bg-clay hover:border-clay transition-colors duration-500 cursor-default"
            >
              <p className="eyebrow mb-6 text-bark group-hover:text-paper/80 transition-colors">
                {r.type}
              </p>
              <h4 className="font-serif text-2xl md:text-3xl text-ink group-hover:text-paper leading-snug mb-8 text-pretty transition-colors">
                {r.title}
              </h4>
              <div className="border-t border-border group-hover:border-paper/30 pt-4 transition-colors">
                <p className="eyebrow mb-2 text-bark group-hover:text-paper/70 transition-colors">Hook</p>
                <p className="font-serif italic text-ink/80 group-hover:text-paper text-lg leading-snug transition-colors">
                  {r.hook}
                </p>
              </div>
              <span className="absolute top-6 right-6 eyebrow text-bark group-hover:text-paper transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </div>

      {/* Stories I tell */}
      <div>
        <div className="flex items-baseline justify-between mb-8 border-b border-border pb-4">
          <h3 className="font-serif text-3xl md:text-4xl italic text-ink">
            Stories I tell
          </h3>
          <p className="eyebrow text-bark">long-form, longer thoughts</p>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {stories.map((s, i) => (
            <article
              key={i}
              className={`col-span-12 md:col-span-4 ${i === 1 ? "md:mt-12" : i === 2 ? "md:mt-24" : ""}`}
            >
              <p className="eyebrow text-clay mb-3">{s.label}</p>
              <h4 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-4 text-pretty underline-grow inline-block">
                {s.title}
              </h4>
              <p className="font-serif text-lg text-bark leading-snug text-pretty">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Stories;
