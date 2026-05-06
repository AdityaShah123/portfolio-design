const About = () => (
  <section id="about" className="relative py-24 md:py-36">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-6 md:gap-12">
      <div className="col-span-12 md:col-span-3">
        <p className="eyebrow mb-3">§ 02 — A note</p>
        <p className="font-serif text-5xl text-ink italic leading-none">I'm Shreeya<br/>:)</p>
      </div>

      <div className="col-span-12 md:col-span-6 md:col-start-5 space-y-6 font-serif text-2xl md:text-[1.7rem] leading-[1.45] text-ink text-pretty">
        <p>
          I started in <span className="italic">Fashion &amp; Lifestyle Accessory Design </span> at 
          <span className="underline-grow text-clay italic"> NIFT Kangra</span>, and graduated with a dual degree in <span className="underline-grow text-clay italic"> Advertising &amp; Marketing Communications at FIT NYC</span> — because designing the object was never quite enough without <span className="italic"> knowing how to make people want it.
          </span>
        </p>
        <p className="text-bark">
          I'm interested in the soft middle: <em>where a product meets a feeling, where a
          caption becomes a campaign, where a brand starts to behave like a person.</em>
        </p>
        <p>
          I sketch, prototype, write scripts, run social. I read consumer
          behaviour like a novel and I think the best ideas survive a scroll —
          and a second look the next morning.
        </p>
      </div>

      {/* sidebar facts */}
      <aside className="col-span-12 md:col-span-2 md:col-start-11 mt-8 md:mt-2 space-y-6">
        <div>
          <p className="eyebrow mb-2">Based</p>
          <p className="font-serif text-lg">New Delhi, IN <br></br> New York, US</p>
        </div>
        {/* <div>
          <p className="eyebrow mb-2">Studying</p>
          <p className="font-serif text-lg">Marketing — FIT, New York</p>
          <p className="font-serif text-sm text-bark italic">prev. NIFT Kangra · B.Des</p>
        </div> */}
        <div>
          <p className="eyebrow mb-2">Obsessed with</p>
          <p className="font-serif text-lg italic">product exploration, fashion journalism, forecasting &amp; eggtrays.</p>
        </div>
        <div>
          <p className="eyebrow mb-2">Tools</p>
          <p className="font-serif text-lg italic">Illustrator, Photoshop, AutoCAD, InDesign &amp; a notebook.</p>
        </div>
      </aside>
    </div>
  </section>
);

export default About;
