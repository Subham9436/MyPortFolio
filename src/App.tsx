import "./App.css";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { EXP } from "./sections/fields";
import { Projects } from "./sections/projects";
import { MarqueeText } from "./sections/marquee";
import { Abilities } from "./sections/abilities";
import { Skills } from "./sections/skills";
import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { Toaster } from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Hero />
      <EXP />
      <Projects />
      <MarqueeText />
      <Abilities />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
