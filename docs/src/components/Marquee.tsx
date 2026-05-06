// const phrases = [
//   "Design × Marketing × Story",
//   "Concept first. Always.",
//   "Editorial thinking",
//   "NIFT Kangra · B.Des '27",
//   "National-level Scrabble player",
//   "Made with patience",
// ];

// const Marquee = () => (
//   <div className="border-y border-border/70 py-5 bg-paper-soft overflow-hidden">
//     <div className="marquee">
//       {[...phrases, ...phrases].map((p, i) => (
//         <span key={i} className="font-serif italic text-2xl md:text-3xl text-ink/80 flex items-center gap-16">
//           {p}
//           <span className="w-2 h-2 rounded-full bg-clay inline-block" />
//         </span>
//       ))}
//     </div>
//   </div>
// );

// export default Marquee;


const phrases = [
  "Form & function",
  "Copywriting",
  "Culturally curious",
  "Visual thinking",
  "Trend oriented"
];

const Marquee = () => (
  <div className="border-y border-border/70 py-5 bg-paper-soft overflow-hidden">
    <style>{`
      @keyframes marquee {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .marquee-track {
        display: flex;
        width: max-content;
        animation: marquee 18s linear infinite;
      }
    `}</style>

    <div className="marquee-track">
      {[...phrases, ...phrases].map((p, i) => (
        <span
          key={i}
          className="font-serif italic text-2xl md:text-3xl text-ink/80 flex items-center gap-16 pr-16"
        >
          {p}
          <span className="w-2 h-2 rounded-full bg-clay inline-block" />
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;