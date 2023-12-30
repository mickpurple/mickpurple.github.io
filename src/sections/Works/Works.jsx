import React, { useEffect } from "react";
import styles from "./Works.module.css";
import gsap from "gsap";

let paraX = 0;
let paraY = 0;

export default function Works() {
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      paraX = e.clientX - window.innerWidth / 2;
      paraY = e.clientY - window.innerHeight / 2;

      gsap.to(".bg-layer1", {
        x: paraX * 0.04,
        y: paraY * 0.01,
        skewX: paraX * 0.005,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(".bg-layer2", {
        x: 250 + paraX * 0.1,
        y: paraY * 0.05,
        skewX: paraX * 0.008,

        duration: 0.3,
        ease: "power2.out",
      });
    });
  }, []);
  return (
    <div className="relative h-screen w-full bg-green-200 flex justify-center items-center gap-10">
      <div className="absolute w-[1200px] h-[400px] bg-green-300 bg-layer1"></div>
      <div className="absolute z-10 w-[400px] h-[200px] bg-green-400 bg-layer2"></div>
    </div>
  );
}
