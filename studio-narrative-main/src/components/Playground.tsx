const ideas = [
  { tag: "Anagram", t: "SHREEYA → A SHEER YE. A brand of stationery for over-thinkers." },
  { tag: "Half-thought", t: "A diya that only lights when two people hold it." },
  { tag: "Spec ad", t: "Scrabble, but the prize is silence in the room for 90 seconds." },
  { tag: "Object", t: "A bookshelf shaped like a Ranakpur arch — for the one shelf you forgot you owned." },
  { tag: "Reel idea", t: "Six seconds of a kettle in the NIFT hostel. One line of copy. That's the ad." },
  { tag: "Tagline", t: "“Tushti — small things, taken seriously.”" },
];

const Playground = () => (
  <section id="playground" className="py-24 md:py-36">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 md:col-span-8">
          <p className="eyebrow mb-4">§ 07 — Playground</p>
          <h2 className="font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] text-ink">
            Half-formed,<br />
            <span className="italic text-rose">on purpose.</span>
          </h2>
        </div>
        <p className="col-span-12 md:col-span-4 font-serif text-xl text-bark text-pretty md:mt-12">
          The scrap pile. Anagrams, spec ads, half-objects — things I'd make if a brief said yes, or if a Tuesday felt long.
        </p>
      </div>

      {/* organic broken grid */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {ideas.map((idea, i) => {
          const layouts = [
            "md:col-span-5",
            "md:col-span-4 md:col-start-7 md:mt-16",
            "md:col-span-3 md:col-start-2",
            "md:col-span-5 md:col-start-6",
            "md:col-span-4 md:col-start-3 md:mt-8",
            "md:col-span-4 md:col-start-8",
          ];
          const tones = [
            "bg-clay text-paper",
            "bg-paper-soft text-ink border border-border",
            "bg-rose text-paper",
            "bg-paper-soft text-ink border border-border",
            "bg-ink text-paper",
            "bg-sand text-ink",
          ];
          return (
            <div
              key={i}
              className={`col-span-12 ${layouts[i]} ${tones[i]} p-8 md:p-10 aspect-[5/4] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-500`}
            >
              <p className="eyebrow opacity-80">{idea.tag}</p>
              <p className="font-serif text-2xl md:text-3xl italic leading-snug text-pretty">
                {idea.t}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Playground;
