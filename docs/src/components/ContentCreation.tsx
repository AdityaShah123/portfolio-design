// import { useState, useRef, useEffect } from "react";

// const allAssets = import.meta.glob<{ default: string }>(
//   "/src/assets/**/*.{jpg,jpeg,png,webp,mp4}",
//   { eager: true }
// );

// function asset(path: string): string {
//   return allAssets[`/src/assets/${path}`]?.default ?? "";
// }

// type Slide =
//   | { type: "image"; src: string; label: string }
//   | { type: "video"; src: string; label: string };

// const slides: Slide[] = [
//   { type: "image", src: asset("shreeya/1.png"), label: "Content Creator" },
//   { type: "image", src: asset("shreeya/2.png"), label: "Visual Storyteller" },
//   { type: "video", src: asset("shreeya/3.mp4"), label: "Shreeya Gupta" },
//   { type: "video", src: asset("shreeya/4.mp4"), label: "Video Reel" },
//   { type: "video", src: asset("shreeya/5.mp4"), label: "Video Reel" },
//   { type: "image", src: asset("shreeya/6.png"), label: "Last" },
// ];

// const Process = () => {
//   const [cur, setCur] = useState(0);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const goTo = (n: number) => {
//     setCur((n + slides.length) % slides.length);
//   };

//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     if (slides[cur].type === "video") {
//       v.play().catch(() => {});
//     } else {
//       v.pause();
//       v.currentTime = 0;
//     }
//   }, [cur]);

//   const slide = slides[cur];

//   return (
//     <div className="relative w-full aspect-video bg-[#1a1208] overflow-hidden rounded-sm">

//       {/* counter */}
//       <p className="absolute top-4 left-4 z-20 eyebrow text-sand/50">
//         {String(cur + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
//       </p>

//       {/* slide content */}
//       {slide.type === "image" ? (
//         <img src={slide.src} alt="" className="w-full h-full object-cover" />
//       ) : (
//         <video
//           ref={videoRef}
//           src={slide.src}
//           loop
//           playsInline
//           muted
//           className="w-full h-full object-cover"
//         />
//       )}

//       {/* nav arrows */}
//       <button
//         onClick={() => goTo(cur - 1)}
//         className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-ink/50 border border-sand/20 text-sand hover:border-sand/60 transition-colors flex items-center justify-center"
//       >
//         ←
//       </button>
//       <button
//         onClick={() => goTo(cur + 1)}
//         className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-ink/50 border border-sand/20 text-sand hover:border-sand/60 transition-colors flex items-center justify-center"
//       >
//         →
//       </button>

//       {/* dots */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => goTo(i)}
//             className={`w-1.5 h-1.5 rounded-full transition-all ${
//               i === cur ? "bg-sand scale-125" : "bg-sand/30"
//             }`}
//           />
//         ))}
//       </div>

//       {/* label */}
//       <p className="absolute bottom-4 right-4 z-20 eyebrow text-sand/50">
//         {slide.label}
//       </p>
//     </div>
//   );
// };

// export default Process;

import { useState, useRef, useEffect } from "react";

const allAssets = import.meta.glob<{ default: string }>(
  "/src/assets/**/*.{jpg,jpeg,png,webp,mp4}",
  { eager: true }
);

function asset(path: string): string {
  return allAssets[`/src/assets/${path}`]?.default ?? "";
}

type Slide =
  | { type: "image"; src: string; label: string }
  | { type: "video"; src: string; label: string };

const slides: Slide[] = [
  { type: "image", src: asset("shreeya/1.png"), label: "Content Creator" },
  { type: "image", src: asset("shreeya/2.png"), label: "Visual Storyteller" },
  { type: "video", src: asset("shreeya/3.mp4"), label: "Shreeya Gupta" },
  { type: "video", src: asset("shreeya/4.mp4"), label: "Video Reel" },
  { type: "video", src: asset("shreeya/5.mp4"), label: "Video Reel" },
  { type: "image", src: asset("shreeya/6.png"), label: "Last" },
];

const Process = () => {
  const [cur, setCur] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const goTo = (n: number) => {
    setCur((n + slides.length) % slides.length);
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (slides[cur].type === "video") {
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [cur]);

  const slide = slides[cur];

  return (
    // <div className="max-w-2xl mx-auto">
    <div id="content-creation" className="px-24 bg-[#493944] scroll-mt-20">
      <div className="relative w-full aspect-video bg-[#1a1208] overflow-hidden rounded-sm ">

        {/* counter */}
        <p className="absolute top-4 left-4 z-20 eyebrow text-sand/50">
          {String(cur + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </p>

        {/* slide content */}
        {slide.type === "image" ? (
          <img src={slide.src} alt="" className="w-full h-full object-cover" />
        ) : (
          <video
            ref={videoRef}
            src={slide.src}
            loop
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        )}

        {/* nav arrows */}
        <button
          onClick={() => goTo(cur - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-ink/50 border border-sand/20 text-sand hover:border-sand/60 transition-colors flex items-center justify-center"
        >
          ←
        </button>
        <button
          onClick={() => goTo(cur + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-ink/50 border border-sand/20 text-sand hover:border-sand/60 transition-colors flex items-center justify-center"
        >
          →
        </button>

        {/* dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === cur ? "bg-sand scale-125" : "bg-sand/30"
              }`}
            />
          ))}
        </div>

        {/* label */}
        <p className="absolute bottom-4 right-4 z-20 eyebrow text-sand/50">
          {slide.label}
        </p>
      </div>
     </div>
  );
};

export default Process;