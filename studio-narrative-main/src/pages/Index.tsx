import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Work from "@/components/Work";
import Gallery from "@/components/Gallery";
import Strategy from "@/components/Strategy";
import Stories from "@/components/Stories";
import Process from "@/components/Process";
import Playground from "@/components/Playground";
import Contact from "@/components/Contact";
import ContentCreation from "@/components/ContentCreation";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Gallery />
      <Strategy />
      {/* <Stories /> */}
      {/* < /> */}
      <ContentCreation />
      {/* <Playground /> */}
      <Contact />
    </main>
  );
};

export default Index;

