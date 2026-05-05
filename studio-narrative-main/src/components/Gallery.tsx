

import pic1 from "@/assets/runway/1.jpg";
import pic2 from "@/assets/runway/2 .jpeg";
import pic3 from "@/assets/runway/3 .jpeg";
import pic4 from "@/assets/runway/4 .jpeg";
import pic5 from "@/assets/runway/5 .jpeg";
import pic6 from "@/assets/runway/6.jpeg";
import pic7 from "@/assets/runway/7.jpeg";
import pic8 from "@/assets/runway/8.jpg";
import pic9 from "@/assets/runway/9.jpeg";
import pic10 from "@/assets/runway/fit_runway27_logo.jpeg";
 
type Photo = {
  src: string;
  caption: string;
  top: string;
  left: string;
  width: string;
  rotate: number;
  z: number;
};
 
const photos: Photo[] = [
  { src: pic1,     caption: "Pl. a — Dreamscapes: different looks",  top: "-1%",  left: "-2%",  width: "56%", rotate: -3, z: 2 },
  { src: pic2,  caption: "Pl. b — Moodboard",  top: "1%",   left: "50%",  width: "52%", rotate: 3,  z: 3 },
  { src: pic3,   caption: "Pl. c — Phoebe: Model 1",      top: "26%",  left: "3%",   width: "22%", rotate: 5,  z: 6 },
  { src: pic4,  caption: "Pl. d — Style room with Kyla",     top: "28%",  left: "22%",  width: "23%", rotate: -6, z: 7 },
  { src: pic5, caption: "Pl. e — Drift look walk",           top: "24%",  left: "44%",  width: "20%", rotate: 4,  z: 5 },
  { src: pic6,  caption: "Pl. f — That's me :) (stylist)",        top: "30%",  left: "60%",  width: "20%", rotate: -4, z: 6 },
  { src: pic7,  caption: "Pl. g — Some glitter for backstage",   top: "26%",  left: "76%",  width: "26%", rotate: 6,  z: 4 },
  { src: pic8,  caption: "",             top: "58%",  left: "-3%",  width: "56%", rotate: 2,  z: 3 },
  { src: pic9,  caption: "Pl. i — In the makeup room",          top: "60%",  left: "52%",  width: "50%", rotate: -3, z: 4 },
];
 
// const photos: Photo[] = [
//   { src: pic1,     caption: "Pl. a — Lit floral shadow, icosahedron",  top: "-1%",  left: "-2%",  width: "42%", rotate: -3, z: 2 },
//   { src: pic2,  caption: "Pl. b — Ranakpur diya, four iterations",  top: "1%",   left: "52%",  width: "38%", rotate: 3,  z: 3 },
//   { src: pic3,   caption: "Pl. c — Cube lamp + metal rod, lit",      top: "26%",  left: "3%",   width: "16%", rotate: 5,  z: 6 },
//   { src: pic4,  caption: "Pl. d — Soft Logic, magnetic forest",     top: "28%",  left: "20%",  width: "17%", rotate: -6, z: 7 },
//   { src: pic5, caption: "Pl. e — Bamboo cart-wheel toy",           top: "24%",  left: "38%",  width: "15%", rotate: 4,  z: 5 },
//   { src: pic6,  caption: "Pl. f — Lamp explorations, Sem 3",        top: "30%",  left: "54%",  width: "15%", rotate: -4, z: 6 },
//   { src: pic7,  caption: "Pl. g — Light test, floral projection",   top: "26%",  left: "70%",  width: "20%", rotate: 6,  z: 4 },
//   { src: pic8,  caption: "Pl. h — Tushti, Diwali edit",             top: "55%",  left: "-3%",  width: "42%", rotate: 2,  z: 3 },
//   { src: pic9,  caption: "Pl. i — Three lamps, one solid",          top: "56%",  left: "50%",  width: "38%", rotate: -3, z: 4 },
// ];

const Gallery = () => (
  <section id="gallery" className="py-24 md:py-36 bg-bone">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">

      {/* Header */}
      <div className="grid grid-cols-12 gap-6 md:gap-12 mb-16 items-end">
        <div className="col-span-12 md:col-span-8">
          <p className="eyebrow mb-4">§ 04 — Lookbook · Visual Index</p>
          <h2 className="font-display text-[clamp(2.75rem,7vw,7rem)] leading-[0.95] text-ink">
            A wall of <span className="italic text-clay">things</span>
            <br />
            <span className="text-cobalt">in the order I made them.</span>
          </h2>
        </div>

        <div className="col-span-12 md:col-span-4 flex items-end justify-end">
          <img
            src={pic10}
            alt="Fit Runway 27 logo"
            className="h-64 w-auto object-contain rounded-full"
          />
        </div>
        {/* <p className="col-span-12 md:col-span-3 md:col-start-10 font-serif text-lg text-bark text-pretty">
          No captions you have to read. Just objects, surfaces and light — pinned to a wall the way I keep them in my head.
        </p> */}
      </div>

      {/* Collage */}
      <div className="relative w-full" style={{ paddingBottom: "95%" }}>
        {photos.map((p, i) => (
          <figure
            key={i}
            className="group absolute shadow-2xl ring-1 ring-black/40 transition-[transform,box-shadow] duration-500 ease-out hover:!z-50 hover:scale-[1.18] hover:!rotate-0 hover:shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)]"
            style={{
              top: p.top,
              left: p.left,
              width: p.width,
              transform: `rotate(${p.rotate}deg)`,
              zIndex: p.z,
              transformOrigin: "center center",
            }}
          >
            <img
              src={p.src}
              alt={p.caption}
              loading="lazy"
              className="block h-auto w-full object-cover"
            />
            <figcaption className="absolute bottom-2 left-2 caption bg-paper/90 text-ink px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Closing stats */}
      {/* <div className="mt-16 md:mt-24 grid grid-cols-3 border-t border-ink/20 pt-8">
        {[
          { n: "08", l: "Projects shipped" },
          { n: "03", l: "Disciplines held" },
          { n: "01", l: "Quiet way of working" },
        ].map((s) => (
          <div key={s.n} className="space-y-1">
            <p className="font-display text-5xl md:text-7xl text-ink leading-none">{s.n}</p>
            <p className="caption text-bark">{s.l}</p>
          </div>
        ))}
      </div> */}

    </div>
  </section>
);

export default Gallery;