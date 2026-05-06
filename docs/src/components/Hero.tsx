import { useEffect, useRef } from "react";
import heroPortrait from "@/assets/PHOTO-2026-05-03-21-14-51.jpg";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const y = window.scrollY;
      ref.current.style.setProperty("--py", `${y * 0.15}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="index" ref={ref} className="relative min-h-screen pt-28 pb-12 grain overflow-hidden">
      {/* corner meta */}
      <div className="absolute top-28 right-6 md:right-12 text-right">
        <p className="eyebrow text-bark/60 mt-1">New Delhi · Kangra · New York</p>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-4 md:gap-8 items-end relative">
        {/* big serif title — broken across columns */}
        <div className="col-span-12 md:col-span-7 reveal">
          <p className="eyebrow mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-bark inline-block" />
            A multidisciplinary folio
          </p>
          <h1 className="font-display leading-[0.92] text-ink text-balance">
            <span className="block text-[clamp(3.5rem,11vw,11rem)]" style={{ fontFamily: "'Kalam', cursive" }}>नमस्ते</span>


            <span className="block text-[clamp(2.5rem,7vw,8rem)] italic text-clay ">
            I design ideas.
            </span>
            <span className="block font-serif text-[clamp(2rem,5.5vw,6rem)] mt-2 text-bark">
              Then I make
              <span className="italic text-cobalt"> <br></br>them work.</span>
            </span>
          </h1>
          <p className="caption mt-6 text-bark">Design × Marketing × Storytelling — yes, all three. No, I don't sleep much.</p>
        </div>

        {/* portrait — offset, asymmetric */}
        <div
          // className="col-span-7 md:col-span-4 md:col-start-9 -mt-12 md:-mt-32 relative"
          className="col-span-6 md:col-span-3 md:col-start-10 -mt-8 md:-mt-16 relative"
          style={{ transform: "translateY(calc(var(--py, 0px) * -1))" }}
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={heroPortrait}
              alt="Portrait of Shreeya Gupta"
              className="w-full h-full object-cover"
              width={896}
              height={1280}
              // width={850}
              // height={1600}
            />
            <div className="absolute inset-0 ring-1 ring-ink/10 mix-blend-multiply" />
          </div>
          <p className="eyebrow text-bark mt-3 text-right">
            Pl. 001 — Self portrait, in dazz cam flash
          </p>
        </div>

        {/* lower meta row */}
        <div className="col-span-12 mt-10 md:mt-20 grid grid-cols-12 gap-4 md:gap-8 items-end border-t border-border/70 pt-6">
          <p className="col-span-12 md:col-span-5 font-serif text-2xl md:text-3xl text-ink text-pretty leading-snug">
            
            Accessory design at <em className="text-clay">NIFT</em>, a year in New York, and a running theory that good design (&amp;  tea) always starts with  <em className="text-rose">going somewhere first.</em>
          </p>
          <div className="col-span-6 md:col-span-3 md:col-start-7">
            {/* <p className="eyebrow mb-2">Currently</p>
            <p className="font-serif text-lg text-ink leading-snug">
              Marketing, <span className="italic">FIT NYC</span> — after B.Des at <span className="italic">NIFT Kangra</span>
            </p> */}
          </div>
          <div className="col-span-6 md:col-span-3">
            {/* <p className="eyebrow mb-2">On the side</p>
            <p className="font-serif text-lg text-ink leading-snug">
              Copywriter &amp; scriptwriter, <span className="italic">@Discovering Vision</span>
            </p> */}
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-6 md:left-12 flex items-center gap-3">
        <span className="w-10 h-px bg-bark" />
        <span className="eyebrow text-bark">Scroll, slowly</span>
      </div>
    </section>
  );
};

export default Hero;
