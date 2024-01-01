import "./App.css";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import Works from "./sections/Works/Works";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import { SmoodScroller } from "./Components/SmoodScroller";

function App() {
  SmoodScroller(70);
  useLayoutEffect(() => {
    gsap.to(".bg-main", {
      backgroundColor: "#050505",
      delay: 1,
      duration: 1.5,
    });
  }, []);
  return (
    <div className="min-h-screen w-full bg-[#000000] bg-main">
      <Home />
      {/* <Works /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
