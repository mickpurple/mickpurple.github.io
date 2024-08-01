import "./App.css";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import Home from "./sections/Home";
import { SmoodScroller } from "./Components/SmoodScroller";
import { Route, Routes } from "react-router-dom";
import Projects from "./sections/Projects/projects";
import HomeOld from "./sections/Home/indexBKP";

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
    <div className="relative min-h-[100dvh] w-full bg-main bg-colXXX">
      {/* <img
        src="images/tex-grain3.jpg"
        className="absolute w-full h-full mix-blend-overlay opacity-70"
      /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/old" element={<HomeOld />} />
      </Routes>
    </div>
  );
}

export default App;
