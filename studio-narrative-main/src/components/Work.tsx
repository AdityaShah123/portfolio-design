import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// ─── Dynamic asset loading ────────────────────────────────────────────────────
const allImages = import.meta.glob<{ default: string }>(
  "/src/pics/p*/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

console.log("All image paths:", Object.keys(allImages));

function getPics(projectNum: number): string[] {
  const prefix = `/src/pics/p${projectNum}/`;
  return Object.entries(allImages)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => {
      const n = (p: string) => parseInt(p.replace(prefix, "").split(".")[0], 10);
      return n(a) - n(b);
    })
    .map(([, mod]) => mod.default);
}

const buildSlides = (num: number, captions: string[]): Slide[] =>
  getPics(num).map((src, i) => ({ src, caption: captions[i] ?? `Pl. ${String(i + 1).padStart(2, "0")}` }));

// ─── Types ────────────────────────────────────────────────────────────────────
type Slide = { src: string; caption: string };
type ChapterKey = "projects" | "materials" | "narrative";

type Project = {
  num: string;
  chapter: ChapterKey;
  // title: string;
  italic?: string;
  content: string;
  cover: string;
  slides: Slide[];
};

// ─── Projects ─────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    num: "01",
    chapter: "projects",
    // title: "Icosahedron",
    italic: "These Met Gala Looks into Lamps ",
    cover: getPics(1)[0],
    slides: buildSlides(1, []),
    content: "Some looks don’t leave your head after you see them. I kept thinking about how that feeling could exist outside a runway. The answer, it turns out, is geometric. An icosahedron, twelve vertices, twenty faces, and apparently endless opinions about what it wants to be."
  },
  {
    num: "02",
    chapter: "projects",
    // title: "Soft Logic",
    italic: "Toda Embroidery x Orange Tree",
    cover: getPics(2)[0],
    slides: buildSlides(2, []),
    content: "Toda embroidery has been stitched from the reverse side for generations, the pattern only revealing itself when you flip it over. That idea of something hidden becoming visible felt like the right place to start. The craft is entirely women-held, passed down without documentation, which made researching it more about observation than reference.This lamp was designed for Orange Tree, a furniture brand built around natural materials and conscious living. The process started with understanding who they design for: urban buyers who want their homes to feel considered, not decorated. The brand's material palette pointed clearly to wood. Pine specifically, because it's light, has visible grain, and stays warm without being precious."
  },
  {
    num: "03",
    chapter: "projects",
    // title: "Ranakpur, retold",
    italic: "Where Material Meets Memory",
    cover: getPics(3)[0],
    slides: buildSlides(3, []),
    content: "The ceramic pieces draw from the Ranakpur Jain Temple, specifically the ceiling dome and the Kalpavriksha, the wish-fulfilling tree, distilled into something quieter. The wooden pieces came from asking what a child actually needs, not just to play, but to do something. The photoshoot wasn't just documentation, but also a test. Watching Amira and Aarav move around these objects, open them, lean into them, made clear what no feedback form could: the work had landed."
  },
  {
    num: "04",
    chapter: "projects",
    // title: "Wood, in 4 acts",
    italic: "What if play actually taught something",
    cover: getPics(4)[0],
    slides: buildSlides(4, []),
    content: "Kids are not the problem. The things designed for them are. Everything moves fast now. Watch, tap, skip, repeat. Attention spans aren't shrinking on their own. They're being trained that way. So this started with one question: what if the fun part required something first? Two toys. Both built around things kids already love, cartoons, colours, the thrill of getting a reward. But neither hands anything over for free. The first one gives you a riddle and a cylinder full of spinning alphabet rings. The answer is in there somewhere. You have to find it yourself. Only then does it open. The second one shows you a cartoon character doing something wrong. Then it hands you the pieces and asks you to put it right. The correct version is the reward, but only if you figured out what should have happened instead. Both stay soft, small, easy to hold. Nothing that looks like homework. Because the moment it feels like learning, kids are gone. The intention is there, just buried under enough fun that no one notices until they're already thinking.",
  },
  {
    num: "05",
    chapter: "projects",
    // title: "Wood, in 4 acts",
    italic: "Moment of Momentum",
    cover: getPics(5)[0],
    slides: buildSlides(5, []),
    content: "Most people are moving too fast to notice they've stopped growing. This started as a magazine and became something closer to a pause. Every image in it is one I took myself, things I noticed while actually moving through the day. The idea was to build something that reflects that back. A place to slow down, sit with a thought, and remember that momentum doesn't always look like speed. Sometimes it's just noticing what's already there.",
  },
];

// ─── Chapters + component (unchanged from original) ───────────────────────────
const chapters: {
  key: ChapterKey;
  numeral: string;
  title: string;
  italic: string;
  subtitle: string;
  count: string;
  accent: string;
}[] = [
  {
    key: "projects",
    numeral: "I.",
    title: "Projects",
    italic: "",
    subtitle: "",
    count: "Projects",
    accent: "bg-clay",
  },
];

const Work = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 md:py-36 bg-paper-soft">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-16 md:mb-24 items-end ">
          <div className="col-span-12 md:col-span-8 ">
            <p className="eyebrow mb-4">§ 03 — Selected Works · 2024–25</p>
            <h2 className="font-display text-8xl leading-[0.92] text-ink">
              Start with what exists 
              <br />
              <span className="italic text-clay"> then anagram it, </span>
              {/* <span className="text-cobalt"> them over chai</span> */}
              {/* <br /> */}
              <span className="text-bark"> and make it yours</span>
            </h2>
          </div>
          {/* <p className="col-span-12 md:col-span-3 md:col-start-10 font-serif text-xl text-bark text-pretty">
            Open a project to walk the slides and read the thinking.
          </p> */}
        </div>

        <Accordion type="multiple" defaultValue={["projects"]} className="border-t border-ink/30">
          {chapters.map((ch) => {
            const items = projects.filter((p) => p.chapter === ch.key);
            return (
              <AccordionItem key={ch.key} value={ch.key} className="border-b-0">
                <AccordionTrigger className="py-8 md:py-12 hover:no-underline group">
                  <div className="grid grid-cols-12 gap-4 md:gap-6 w-full text-left items-baseline">
                    {/* <span className="col-span-2 md:col-span-1 font-mono text-sm md:text-base text-bark group-hover:text-cobalt transition-colors">
                      {ch.numeral}
                    </span> */}
                    <h3 className="col-span-10 md:col-span-6 font-display text-3xl md:text-6xl text-ink leading-none">
                      {ch.title} <span className="italic text-clay">{ch.italic}</span>
                    </h3>
                    <p className="col-span-12 md:col-span-3 font-serif text-base md:text-lg text-bark text-pretty mt-2 md:mt-0">
                      {ch.subtitle}
                    </p>
                    {/* <p className="col-span-12 md:col-span-2 caption text-bark text-left md:text-right mt-2 md:mt-0">
                      {ch.count}
                    </p> */}
                  </div>
                </AccordionTrigger>

                {/* <AccordionContent className="pb-16 md:pb-24 pt-4"> */}
                <AccordionContent className="pb-4 pt-4">
                  <div className={`h-[3px] w-16 mb-10 ${ch.accent}`} aria-hidden />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {items.map((p) => (
                      <button
                        key={p.num}
                        onClick={() => setActive(p)}
                        className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
                      >
                        <div className="relative overflow-hidden rounded-2xl aspect-[6/4] mb-4 bg-muted">
                          <img
                            src={p.cover}
                            alt={p.italic}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                          />
                          <div className="absolute top-3 right-3 caption text-ink bg-paper/90 px-2 py-1 rounded-md">
                            {p.slides.length} slides
                          </div>
                          <div className="absolute bottom-3 right-3 caption text-paper bg-cobalt px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                            Open case →
                          </div>
                        </div>
                        <div className="flex items-baseline justify-between gap-3 mb-1">
                          <h4 className="font-serif text-2xl md:text-3xl text-ink group-hover:text-cobalt transition-colors text-pretty">
                            {/* {p.title} */}
                            {p.italic && <span className="italic text-ink">{p.italic}</span>}
                          </h4>
                          
                        </div>
                        
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[92vh] overflow-y-auto bg-paper border-0 p-0 sm:rounded-sm [&>button]:mix-blend-difference [&>button]:text-white [&>button]:z-50">
          {active && (
            <article className="flex flex-col">
              <div className="bg-bone border-b border-ink/10">
  <Carousel className="w-full">
    <CarouselContent>
      {active.slides.map((s, i) => (
        <CarouselItem key={i}>
          <div className="relative aspect-[6/4] overflow-hidden bg-muted">
            <img src={s.src} alt={s.caption} className="w-full h-full object-contain bg-paper-soft" />
            
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="left-2 bg-paper/95 border-ink/20 text-ink hover:bg-cobalt hover:text-paper hover:border-cobalt" />
    <CarouselNext className="right-2 bg-paper/95 border-ink/20 text-ink hover:bg-cobalt hover:text-paper hover:border-cobalt" />
  </Carousel>
</div>

              <div className="p-6 md:p-12 max-w-3xl mx-auto w-full space-y-8">
                <header>
                  
                  <DialogTitle asChild>
                    <h3 className="font-display text-4xl md:text-5xl text-ink leading-[1.02] text-pretty">
                      {/* {active.title} */}
                      {active.italic && <span className="italic text-ink">{active.italic}</span>}
                    </h3>
                  </DialogTitle>
                  <DialogDescription asChild>
                   
                  </DialogDescription>
                </header>

                

                <div className="space-y-6">
                  <div>
                    <p className="font-serif text-lg text-ink leading-snug text-pretty">{active.content}</p>
                  </div>
                  
                  
  
                </div>
              </div>
            </article>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Work;