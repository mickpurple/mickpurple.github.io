import gsap from "gsap";
import { useEffect } from "react";

import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const SmoodScroller = (speed) => {
  useEffect(() => {
    var count = 0;

    const gsapfunc = (offsetTrue) =>
      gsap.to(window, {
        duration: 0.6,
        ease: "sine",
        scrollTo: { y: offsetTrue },
      });

    const vscroll = () => {
      gsapfunc(count * speed);
    };

    window.addEventListener(
      "wheel",
      (e) => {
        if (e.deltaY < 0) {
          count--;
        } else {
          count++;
        }

        if (count < 0) {
          count = 0;
        }

        if (count * speed >= document.body.scrollHeight - window.innerHeight) {
          count = (document.body.scrollHeight - window.innerHeight) / speed;
        }

        vscroll();
        e.preventDefault();
        e.stopImmediatePropagation();
      },
      { capture: true, passive: false }
    );
  }, []);
};
