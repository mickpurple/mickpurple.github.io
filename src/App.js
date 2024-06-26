import "./App.css";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import Home from "./sections/Home";
import { SmoodScroller } from "./Components/SmoodScroller";
import { Route, Routes } from "react-router-dom";
import Projects from "./sections/Projects/projects";

function App() {
  SmoodScroller(70);

  // useLayoutEffect(() => {
  //   gsap.to(".bg-main", {
  //     backgroundColor: "#050505",
  //     delay: 1,
  //     duration: 1.5,
  //   });
  // }, []);

  return (
    <div className="relative min-h-screen w-full bg-main bg-col">
      <img
        src="images/tex-grain3.jpg"
        className="absolute w-full h-full mix-blend-overlay opacity-70"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
