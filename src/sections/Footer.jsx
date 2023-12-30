import gsap from "gsap";
import React, { useLayoutEffect } from "react";

export default function Footer() {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".card",
      {
        opacity: 0,
        y: 500,
        style: "box-shadow: rgba(100, 100, 111, 0.5) 0px 0px 200px 5px;",
      },
      {
        opacity: 1,
        y: 0,
        style: "box-shadow: rgba(100, 100, 111, 0.5) 0px 0px 10px 5px;",
        delay: 1.5,
        duration: 0.8,
        stagger: 0.2,
      }
    );
  });
  return (
    <div className="relative flex justify-center items-center p-40 text-center ">
      <div className="flex justify-center items-center gap-5 bg-white w-[500px] h-[280px] rounded-2xl">
        <div className="bg-stone-500 rounded-full w-20 h-20 flex justify-center items-center text-white">
          <a
            href="https://twitter.com/theMickpurple"
            target="_blank"
            rel="noreferrer"
          >
            twitter
          </a>
        </div>
        <div className="bg-stone-500 rounded-full w-20 h-20 flex justify-center items-center">
          <a
            href="https://www.instagram.com/mickpurple/"
            target="_blank"
            rel="noreferrer"
          >
            insta
          </a>
        </div>
        <div className="bg-stone-500 rounded-full w-20 h-20 flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/kartikey-soni-a0b527220/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
