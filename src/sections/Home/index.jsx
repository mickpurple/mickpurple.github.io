import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { Children, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const [divPad, setDivPad] = useState(0);

  useEffect(() => {
    const onResize = () => {
      const mainDiv = document.getElementById("mainDiv");
      setDivPad(mainDiv.getBoundingClientRect().x + 20);
    };

    onResize();

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const windowPosCalc = () => {
    const win = Array.from(document.getElementsByClassName(`window`));
    win.map((item, index) => {
      // console.log(item);
      const tempPos =
        (item.getBoundingClientRect().left + item.offsetWidth / 2) /
        (window.innerWidth / 2);

      item.style.marginLeft = `${(tempPos * 15) / 0.95}%`;
    });
  };

  useEffect(() => {
    setInterval(() => {
      windowPosCalc();
    }, 30);
  }, []);

  const SocialIcon = ({ link, image }) => {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={image}
          alt="linkedIn"
          className="w-[60px] h-[60px] hover:scale-105 transition-transform"
        />
      </a>
    );
  };

  const Slide = ({ index, children }) => {
    return (
      <div
        className={`relative text-white bg-[#6e6e6e] rounded-[25px] sm:w-full pt-[100%] card-anim${index}`}
      >
        <div
          className={`absolute window window-img w-3/4 h-2/3 top-[10%] rounded-[15px] blur-[6px] saturate-[0.2] brightness-110 -scale-x-100 border-[12px] border-[#313131] `}
          id={`window${index}`}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full p-5 text-[22px] xl:text-[32px]">
          {children}
        </div>
        <img
          src="/images/dirt2.avif"
          className="absolute top-0 object-cover w-full h-full mix-blend-overlay pointer-events-none"
        />
      </div>
    );
  };

  useGSAP(() => {
    gsap.fromTo(".sliders", { x: "300%" }, { x: "0", immediateRender: true });
  });

  return (
    <div className="text-white">
      <div
        id="mainDiv"
        className="container mx-auto px-5 h-screen flex flex-col justify-center items-center"
      >
        <div className="flex flex-col md:flex-row justify-between md:items-center w-full mb-5 md:mb-0">
          <p className="text-[48px] md:text-[64px] lg:text-[96px] leading-tight">
            KARTIKEY SONI
          </p>
          <div className="flex gap-5">
            <SocialIcon
              link={"https://www.linkedin.com/in/kartikey-soni-a0b527220/"}
              image={"/images/icon-linkedin.png"}
            />
            <SocialIcon
              link={"https://www.instagram.com/mickpurple/"}
              image={"/images/icon-insta.png"}
            />
            <SocialIcon
              link={"https://twitter.com/theMickpurple"}
              image={"/images/icon-twitter.png"}
            />
          </div>
        </div>

        <div className="relative w-screen z-10">
          <div className="w-full train swiper-no-swipingX">
            {divPad && (
              <Swiper
                spaceBetween={50}
                initialSlide={1}
                slidesPerView={1.3}
                slidesOffsetBefore={divPad}
                slidesOffsetAfter={divPad}
                // noSwiping={false}
                breakpoints={{
                  500: {
                    slidesPerView: 2,
                  },
                  800: {
                    slidesPerView: 3,
                    // noSwiping: true,
                    slidesOffsetBefore: divPad,
                    slidesOffsetAfter: divPad,
                  },
                  1200: {
                    slidesPerView: 3.5,
                    // noSwiping: true,
                    slidesOffsetBefore: divPad,
                    slidesOffsetAfter: divPad,
                  },
                  1800: {
                    slidesPerView: 4,
                    // noSwiping: true,
                    slidesOffsetBefore: divPad,
                    slidesOffsetAfter: divPad,
                  },
                }}
              >
                <SwiperSlide className="overflow-hidden rounded-[25px] sliders">
                  <Slide index={0}></Slide>
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[25px] sliders">
                  <Slide index={1}>
                    <div className="w-full h-full relative">
                      <a
                        href="https://github.com/mickpurple"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className=" bg-[#2d217251] leading-tight p-4 lg:max-w-[232px] rounded-[15px] flex backdrop-blur-md absolute xl:top-[10%] xl:left-[5%]">
                          Catch up on my latest works and cool projects on my
                          Github!
                        </div>
                      </a>
                    </div>
                  </Slide>
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[25px] sliders">
                  <Slide index={2}>
                    <div className="w-full h-full relative">
                      <div className=" bg-[#214c7251] leading-tight p-4 2xl:max-w-[70%] rounded-[15px] flex backdrop-blur-md absolute">
                        Have a cool idea or project in mind? Connect using any
                        of the socials or mail now!
                      </div>
                      <a href="mailto:themickpurple@gmail.com">
                        <div className="bg-[#72213570] leading-tight p-4 rounded-[15px] absolute bottom-0 xl:right-0 flex backdrop-blur-md">
                          themickpurple@gmail.com
                        </div>
                      </a>
                    </div>
                  </Slide>
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[25px] sliders">
                  <Slide index={3}>
                    <div className="w-full h-full relative">
                      <a href="#projects">
                        <div className=" bg-[#72215370] leading-tight p-4 max-w-[232px] rounded-[15px] absolute bottom-[20%] right-0 flex backdrop-blur-md">
                          checkout some cool projects!
                        </div>
                      </a>
                    </div>
                  </Slide>
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[25px] sliders">
                  <Slide index={4}></Slide>
                </SwiperSlide>
              </Swiper>
            )}
          </div>
        </div>
        <div className="w-full mt-[40px] lg:mt-[40px]">
          <p className="text-[28px] md:text-[32px] lg:text-[40px] max-w-[256px] md:max-w-[300px] lg:max-w-[360px] leading-tight">
            Software developer and tech enthusiast with a thing for art and
            design.
          </p>
        </div>
      </div>
    </div>
  );
}
