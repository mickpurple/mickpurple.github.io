import gsap from "gsap";
import React, { useEffect } from "react";

// import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    //scrol to top on page load
    window.scrollTo(0, 0);

    //header text/vector anims
    var tl = gsap.timeline();

    tl.fromTo(
      ".svg-img",
      {
        transform: 1.2,
        stroke: "#fff",
        strokeDashoffset: "100",
        filter: "drop-shadow( 0px 0px 64px #fff)",
      },
      {
        transform: 1,
        stroke: "#6F4A8E",
        strokeDashoffset: "0",
        filter: "drop-shadow( 0px 0px 4px #6F4A8E)",
        duration: 2.2,
        delay: 0.1,
        ease: "ease.inOut",
      }
    );
    tl.to(".text-dot", { opacity: 1 });

    //other anims
    gsap.fromTo(
      ".card",
      {
        opacity: 0,
        y: "500%",
      },
      {
        opacity: 1,
        y: 0,
        style: "box-shadow: rgba(100, 100, 111, 0.5) 0px 0px 5px 5px;",
        delay: 1.5,
        duration: 0.8,
        stagger: 0.2,
      }
    );
  });

  return (
    <div className="container mx-auto px-5 thiss">
      <div className="flex flex-col justify-center items-center gap-20 md:h-screen overflow-hidden">
        {/* header start */}
        <div className="z-20 flex justify-center absolute -top-14 left-0 right-0 max-w-[450px] mx-auto pointer-events-none">
          <svg
            width="800.00"
            height="400.00"
            viewBox="0.00 0.00 800.00 400.00"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              strokeLinecap="round"
              transform="translate(1.00, -221.00)"
              id="mick"
            >
              <path
                d="M54.62,320.90 C54.62,320.90 54.04,321.18 54.04,321.18 C54.04,321.18 53.84,322.10 53.84,322.10 C53.84,322.10 55.47,324.27 55.47,324.27 C57.79,323.32 61.76,320.26 65.38,316.85 C70.91,311.41 83.56,300.32 86.83,297.85 C91.89,294.06 99.45,290.29 100.32,289.85 C101.63,290.84 103.22,292.87 103.77,294.54 C104.60,297.22 100.00,312.88 96.37,323.98 C93.96,331.14 91.19,339.37 90.83,340.45 C94.11,334.16 103.02,317.43 105.58,313.22 C109.38,306.98 117.65,296.56 123.53,291.84 C125.95,289.94 128.97,289.74 130.13,289.88 C131.00,291.05 132.13,292.77 132.57,293.78 C133.45,295.84 132.56,302.87 131.45,308.55 C129.35,318.71 126.29,326.94 123.41,333.27 C124.99,329.05 134.57,313.77 138.32,309.00 C140.68,306.03 145.68,300.56 148.10,298.31 C154.11,292.80 160.44,291.17 161.60,290.85 C162.82,291.60 164.47,292.83 165.03,293.64 C166.17,295.35 165.60,302.09 164.67,307.35 C162.25,320.35 161.09,328.11 161.32,329.92 C161.65,332.45 162.75,335.60 163.73,337.29 C166.19,338.19 167.99,338.28 170.17,337.31 C173.86,335.65 179.35,331.81 182.21,328.69 C183.79,326.94 188.93,320.04 190.88,316.97 C192.99,313.62 195.43,308.24 196.66,304.30 C197.58,301.22 197.96,296.87 197.96,295.36 C196.69,297.02 195.05,301.67 194.10,306.28 C193.31,310.21 192.46,316.94 192.31,320.62 C192.16,324.43 192.55,329.74 193.57,330.70 C193.91,331.01 194.96,331.83 196.69,333.15 C199.74,332.94 202.91,331.65 206.79,329.16 C213.44,324.73 244.46,298.85 254.81,290.06 C252.87,291.35 249.35,294.56 246.16,298.06 C243.09,301.46 239.05,307.69 237.32,311.71 C235.67,315.61 233.81,321.85 234.38,323.96 C234.67,324.96 235.82,327.83 236.26,328.90 C237.64,329.74 240.03,330.75 241.47,330.92 C243.28,331.12 249.64,328.55 252.37,326.82 C258.08,323.14 268.88,312.39 273.35,306.12 C278.29,299.12 284.66,286.08 286.24,280.59 C287.17,277.28 287.49,273.41 287.21,270.95 C285.95,271.64 284.02,273.71 282.95,275.75 C281.90,277.79 277.04,301.26 277.36,305.07 C277.53,306.72 278.03,309.36 278.50,310.95 C279.12,312.90 280.46,314.95 281.72,315.80 C283.04,316.60 285.84,317.00 287.76,316.57 C291.31,315.73 297.46,311.76 299.58,310.13 C305.57,305.47 313.70,296.07 320.55,286.36 C322.81,283.11 325.80,278.82 326.52,277.78 C326.52,277.78 282.64,315.43 282.64,315.43 C285.96,315.65 293.12,316.10 295.87,316.45 C298.46,316.79 303.77,319.43 307.02,321.45 C313.10,325.25 322.87,332.68 330.70,339.31 C334.35,342.36 339.15,346.02 341.10,346.28 C342.19,346.39 345.60,345.89 347.06,345.46 C348.88,344.88 351.81,343.14 353.04,341.88 C359.39,335.07 363.77,315.22 365.28,307.07 C365.28,307.07 337.40,374.70 337.40,374.70 C341.91,368.44 360.86,334.48 369.13,319.63 C371.23,315.95 375.28,309.63 377.08,307.57 C379.17,305.22 383.73,301.01 386.72,298.97 C388.58,297.72 391.38,296.51 393.27,296.12 C394.99,295.79 398.23,295.72 399.55,296.01 C402.12,296.65 407.05,300.71 408.41,303.50 C409.86,306.67 410.16,312.64 409.04,316.40 C407.98,319.77 403.67,325.76 401.07,328.06 C398.86,329.97 392.77,333.38 390.04,334.28 C386.82,335.31 381.06,335.82 378.50,334.98 C377.37,334.58 375.19,333.02 374.61,332.23 C374.10,331.47 373.54,329.27 373.62,328.38 C373.74,327.51 374.82,325.40 375.56,324.72 C377.18,323.31 383.62,320.85 385.53,320.74 C389.29,320.57 407.79,324.49 415.99,326.20 C421.86,327.23 425.90,327.32 428.97,326.17 C431.77,325.03 434.72,321.68 436.76,317.95 C438.58,314.50 439.78,308.03 439.43,303.64 C439.39,303.18 438.97,299.44 438.82,298.00 C438.07,303.92 437.42,310.42 438.34,314.10 C438.97,316.44 442.73,323.24 444.85,324.96 C446.14,325.94 448.56,326.96 450.11,327.12 C453.07,327.36 458.33,325.08 460.58,323.67 C463.47,321.81 466.97,318.07 469.58,314.35 C472.27,310.44 478.34,301.16 478.95,300.22 C478.00,303.98 477.35,307.72 477.35,311.44 C477.37,314.23 477.88,321.37 478.89,323.39 C479.29,324.13 482.33,325.72 483.63,325.97 C484.88,326.18 491.01,323.13 492.44,321.67 C495.32,318.66 504.67,304.38 507.40,300.16 C507.40,300.16 500.77,331.55 500.77,331.55 C503.46,328.84 506.57,323.58 508.45,320.45 C517.55,305.38 527.52,296.47 531.15,293.60 C531.81,294.54 532.42,296.30 532.29,297.60 C532.19,298.52 527.87,308.76 527.05,311.74 C526.12,315.19 525.61,322.80 525.83,324.42 C526.12,326.25 527.02,328.08 528.12,328.99 C529.27,329.87 531.75,331.12 532.89,331.23 C535.58,331.42 541.85,328.47 545.40,325.86 C547.94,323.96 552.75,319.59 554.97,316.47 C556.49,314.33 560.88,306.78 562.53,303.91 C562.53,303.91 541.42,392.61 541.42,392.61 C544.75,383.44 547.85,375.79 553.24,364.33 C556.83,356.97 564.28,342.02 568.14,334.42 C573.21,324.80 578.79,315.11 583.64,308.70 C585.35,306.48 590.46,300.32 592.94,297.73 C595.40,295.22 599.42,294.39 600.88,294.47 C601.57,296.04 602.34,298.83 602.43,300.61 C602.51,302.78 599.92,310.95 598.08,314.47 C596.15,318.08 592.00,323.86 589.44,326.53 C587.23,328.79 583.20,331.34 581.60,332.23 C583.66,331.07 584.96,330.65 586.99,330.72 C591.34,330.87 596.97,331.57 601.87,332.42 C606.47,333.23 611.70,333.47 614.15,332.72 C616.66,331.90 622.99,327.89 624.43,326.68 C626.33,325.05 629.63,320.25 630.89,317.49 C634.88,308.70 639.48,297.55 642.34,287.91 C643.67,283.43 648.16,264.13 649.96,255.78 C652.31,244.41 653.86,235.66 653.13,234.08 C648.78,248.37 638.12,284.21 634.68,297.56 C632.71,305.82 629.97,321.14 630.52,324.29 C631.04,327.03 634.60,331.79 637.04,333.26 C638.40,334.04 641.00,334.51 642.66,334.33 C645.26,333.99 652.06,331.90 655.15,330.48 C661.71,327.41 673.10,318.09 677.99,313.16 C680.60,310.50 685.95,304.38 688.26,301.47 C690.35,298.82 694.81,292.04 695.65,288.77 C695.88,287.85 695.98,284.55 696.05,283.35 C694.81,282.24 692.50,280.87 690.99,280.59 C688.98,280.25 681.67,283.29 678.83,285.23 C675.75,287.37 670.90,291.47 668.81,293.86 C666.75,296.26 662.40,303.09 661.15,306.18 C659.86,309.44 659.08,316.32 659.56,319.34 C660.16,322.70 663.53,328.24 666.60,330.91 C668.55,332.57 676.07,337.65 679.21,338.71 C681.31,339.40 686.77,339.83 691.50,339.90 C697.60,339.89 711.03,337.17 715.62,335.64 C719.72,334.24 737.65,324.78 741.97,321.93 C746.09,319.18 752.53,313.65 753.32,312.54 C753.92,311.69 754.64,309.83 754.92,308.77 C753.04,309.34 749.84"
                fill="none"
                // stroke="rgb(100, 100, 100)"
                strokeWidth="8"
                strokeOpacity="1.00"
                strokeLinejoin="round"
                className="svg-img"
                pathLength="100"
                style={{
                  strokeDasharray: "100",
                }}
              />
              <path
                d="M208.36,267.03 C208.36,267.03 208.73,266.84 208.73,266.84 C205.68,266.55 201.64,267.54 196.62,269.83 C196.99,271.58 197.71,274.07 198.28,274.85 C199.25,276.13 206.23,277.32 208.15,277.15 C211.05,276.83 214.56,274.48 215.85,272.13 C216.40,271.04 216.44,269.19 215.94"
                fill="none"
                stroke="#6F4A8E"
                strokeWidth="8"
                strokeOpacity="1.00"
                strokeLinejoin="round"
                className="text-dot opacity-0"
                style={{
                  filter: "drop-shadow( 0px 0px 4px #6F4A8E)",
                }}
              />
            </g>
          </svg>
        </div>

        <div className="max-w-[900px] mt-[200px] md:mt-0">
          {/* socials */}
          <div className="flex justify-center gap-5 mb-20">
            <a
              href="https://www.linkedin.com/in/kartikey-soni-a0b527220/"
              target="_blank"
              rel="noreferrer"
              className="h-16 w-16 flex items-center justify-center duration-300 transition-all bg-[#221F3B] hover:bg-[#EBEBEB] rounded-[30%] hover:rounded-[100%] hover:scale-110"
            >
              <img
                src="/images/linkedin-logo.png"
                alt="ArtStation"
                className="h-8 w-8 brightness-"
              />
            </a>

            <a
              href="https://www.instagram.com/mickpurple/"
              target="_blank"
              rel="noreferrer"
              className="h-16 w-16 flex items-center justify-center duration-300 transition-all bg-[#221F3B] hover:bg-[#EBEBEB] rounded-[30%] hover:rounded-[100%] hover:scale-110"
            >
              <img
                src="/images/insta-logo.png"
                alt="ArtStation"
                className="h-8 w-8"
              />
            </a>

            <a
              href="https://twitter.com/theMickpurple"
              target="_blank"
              rel="noreferrer"
              className="h-16 w-16 flex items-center justify-center duration-300 transition-all bg-[#221F3B] hover:bg-[#EBEBEB] rounded-[30%] hover:rounded-[100%] hover:scale-110"
            >
              <img
                src="/images/x-logo.png"
                alt="ArtStation"
                className="h-8 w-8 brightness-0"
              />
            </a>
          </div>

          {/* main body starts here */}
          <div className="grid grid-cols-4 md:grid-cols-10 gap-5">
            <div className="col-span-4 row-span-2 text-center text-lg flex items-center bg-[#EBEBEB] rounded-[25px] hover:rounded-[40px] transition-[border-radius] duration-300 p-6 card">
              <p>
                Full stack web developer with a thing for good design and visual
                art.
              </p>
            </div>

            <div className="col-span-4 md:col-span-3 flex justify-center items-center bg-[#EBEBEB] rounded-[25px] hover:rounded-[40px] transition-[border-radius] duration-300 card">
              <a
                href="https://github.com/Mickpurple"
                target="_blank"
                rel="noreferrer"
                className="w-full h-full p-5"
              >
                <img
                  src="/images/Github-logo.png"
                  alt="GitHub"
                  className="h-16 mx-auto"
                />
              </a>
            </div>

            <div className="col-span-4 md:col-span-3 flex justify-center items-center bg-[#EBEBEB] rounded-[25px] hover:rounded-[40px] transition-[border-radius] duration-300 card">
              <a
                href="https://www.artstation.com/mickpurple"
                target="_blank"
                rel="noreferrer"
                className="w-full h-full p-5"
              >
                <img
                  src="/images/artstation-logo.png"
                  alt="ArtStation"
                  className="h-16 mx-auto"
                />
              </a>
            </div>

            <div className="col-span-4 md:col-span-2 flex justify-center items-center bg-[#EBEBEB] rounded-[25px] hover:rounded-[40px] transition-[border-radius] duration-300 card">
              <a
                href="https://mickpurple.itch.io/"
                target="_blank"
                rel="noreferrer"
                className="w-full h-full p-5"
              >
                <img
                  src="/images/itch-logo.png"
                  alt="itch.io"
                  className="h-16 object-scale-down mx-auto"
                />
              </a>
            </div>

            <div className="col-span-4 md:col-span-2 flex justify-center items-center bg-[#EBEBEB] rounded-[25px] hover:rounded-[40px] transition-[border-radius] duration-300 card">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="w-full h-full p-5"
              >
                <p className="text-center text-lg">
                  projects <br /> <span className="text-xs">coming soon</span>
                </p>
              </a>
            </div>
          </div>

          {/* extra block for space management */}
          <div className="md:h-24"></div>
        </div>
      </div>
    </div>
  );
}
