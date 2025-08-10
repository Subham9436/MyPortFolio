import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { EXP } from "./sections/fields";
import { Projects } from "./sections/projects";
import { MarqueeText } from "./sections/marquee";
import { Abilities } from "./sections/abilities";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <EXP />
      <Projects />
      <MarqueeText />
      <Abilities/>
    </div>
  );
}

export default App;
