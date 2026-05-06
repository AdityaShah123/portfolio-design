// const Contact = () => (
//   <footer id="contact" className="bg-ink text-paper grain relative pt-24 md:pt-36 pb-10">
//     <div className="max-w-[1600px] mx-auto px-6 md:px-12">
//       <p className="eyebrow text-sand mb-8">§ 08 — Contact</p>

//       <h2 className="font-serif text-[clamp(2.8rem,9vw,9rem)] leading-[0.95] text-paper text-balance max-w-6xl">
//         Let's build something
//         <span className="italic text-sand"> people actually</span>
//         <span className="italic text-clay"> care about.</span>
//       </h2>

//       <div className="mt-16 grid grid-cols-12 gap-6 md:gap-12 border-t border-paper/15 pt-10">
//         <div className="col-span-12 md:col-span-5">
//           <p className="eyebrow text-sand mb-3">Write to me</p>
//           <a
//             href="mailto:shreeyag2005@gmail.com"
//             className="font-serif text-3xl md:text-5xl italic underline-grow text-paper break-all"
//           >
//             shreeyag2005@gmail.com
//           </a>
//           <p className="eyebrow text-sand/70 mt-4">+91 85957 25733</p>
//         </div>

//         <div className="col-span-6 md:col-span-2">
//           <p className="eyebrow text-sand mb-3">Elsewhere</p>
//           <ul className="space-y-2 font-serif text-xl">
//             <li><a className="underline-grow" href="https://www.linkedin.com/in/artsyee" target="_blank" rel="noreferrer">LinkedIn</a></li>
//             <li><a className="underline-grow" href="https://instagram.com/httpshreeya" target="_blank" rel="noreferrer">Instagram</a></li>
//             <li><a className="underline-grow" href="https://drive.google.com/file/d/1uL6zCPX3fNXRHkNP8iujSl0EEtoSfZVb/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
//             {/* <li><a className="underline-grow" href="#">Behance</a></li>
//             <li><a className="underline-grow" href="#">Substack</a></li> */}
//           </ul>
//         </div>

//         <div className="col-span-6 md:col-span-2">
//           <p className="eyebrow text-sand mb-3">Open to</p>
//           <ul className="space-y-2 font-serif text-xl text-paper/85">
//             <li>Internships</li>
//             <li>Brand &amp; copy</li>
//             <li>Editorial</li>
//             <li>A long coffee</li>
//           </ul>
//         </div>

//         {/* <div className="col-span-12 md:col-span-3">
//           <p className="eyebrow text-sand mb-3">Currently</p>
//           <p className="font-serif italic text-2xl text-paper leading-snug">
//             New Delhi — between a sketchbook and a script.
//           </p> 
//         </div> */}
//       </div>

//     </div>
//   </footer>
// );

// export default Contact;


const Contact = () => (
  <footer id="contact" className="bg-ink text-paper grain relative pt-24 md:pt-36 pb-10">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
      <p className="eyebrow text-sand mb-8">§ 08 — Contact</p>

      <h2 className="font-serif text-[clamp(2.8rem,9vw,9rem)] leading-[0.95] text-paper text-balance max-w-6xl">
        {"Let's build something"}
        <span className="italic text-sand"> people actually</span>
        <span className="italic text-clay"> care about.</span>
      </h2>

      <div className="mt-16 grid grid-cols-12 gap-6 md:gap-12 border-t border-paper/15 pt-10">
        <div className="col-span-12 md:col-span-5">
          <p className="eyebrow text-sand mb-3">Write to me</p>
          
          <a
             href="mailto:shreeyag2005@gmail.com"
            className="font-serif text-3xl md:text-5xl italic underline-grow text-paper break-all"
            >
            shreeyag2005@gmail.com
          </a>
          <p className="eyebrow text-sand/70 mt-4">+91 85957 25733</p>
        </div>

        <div className="col-span-6 md:col-span-2 md:col-start-9">
          <p className="eyebrow text-sand mb-3">Elsewhere</p>
          <ul className="space-y-2 font-serif text-xl">
            <li><a className="underline-grow" href="https://www.linkedin.com/in/artsyee" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="underline-grow" href="https://instagram.com/httpshreeya" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a className="underline-grow" href="https://drive.google.com/file/d/1uL6zCPX3fNXRHkNP8iujSl0EEtoSfZVb/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-2 md:col-start-11">
          <p className="eyebrow text-sand mb-3">Open to</p>
          <ul className="space-y-2 font-serif text-xl text-paper/85">
            <li>Internships</li>
            <li>Brand &amp; copy</li>
            <li>Editorial</li>
            <li>A long coffee</li>
          </ul>
        </div>
      </div>

    </div>
  </footer>
);

export default Contact;