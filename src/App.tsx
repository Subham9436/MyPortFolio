import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route />
      </Routes>
      <Hero/>
    </div>
  );
}

export default App;
