import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { EXP } from "./sections/fields";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route />
      </Routes>
      <Hero />
      <EXP/>
    </div>
  );
}

export default App;
