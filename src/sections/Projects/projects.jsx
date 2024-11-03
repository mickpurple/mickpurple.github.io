import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Projects() {
  useGSAP(() => {
    gsap.fromTo(
      ".projectCard",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.22,
      }
    );
  });

  return (
    <div className="relative min-h-screen container mx-auto p-3 md:p-5 tracking-tight text-[#fff9]">
      <div className="flex flex-wrap gap-4 md:gap-5 bg-gradient-to-b from-[#3333] to-[#444444ce] border border-[#444444ce] backdrop-blur-sm rounded-[24px] p-3 md:p-5">
        <a href="/" rel="noreferrer" className="drop-shadow-xl">
          <div className="w-[160px] h-full bg-[#333] border border-[#444] rounded-xl p-5">
            <p className="text-4xl">back</p>
          </div>
        </a>

        <div className="bg-[#333] border border-[#444] rounded-xl p-3 md:p-5 drop-shadow-xl projectCard flex flex-col-reverse md:flex-row gap-5">
          <div className="">
            <p className="text-4xl bg-gradient-to-b from-[#fff] via-[#fff] to-[#fff7] bg-clip-text text-transparent">
              Myra Site
            </p>
            <p className="text-2xl mt-2 md:max-w-[220px]">
              A dummy jewellery site, created in React with TailwindCSS and
              GSAP.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://github.com/mickpurple/Myra-site"
                rel="noreferrer"
                target="_blank"
              >
                <motion.p
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#222] border border-[#555] px-5 py-1 rounded-full text-xl text-white"
                >
                  code
                </motion.p>
              </a>
              <a
                href="https://mickpurple.com/Myra-site/"
                rel="noreferrer"
                target="_blank"
              >
                <motion.p
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#222] border border-[#555] px-5 py-1 rounded-full text-xl text-white"
                >
                  demo
                </motion.p>
              </a>
            </div>
          </div>
          <div>
            <img src="https://cdn.dribbble.com/userupload/14941144/file/original-4731f77a7dbca0d93a5eed59b6d812b9.png" className="md:w-[220px] h-[220px] rounded-[10px]" />
          </div>
        </div>

        <div className="bg-[#333] border border-[#444] rounded-xl p-5 flex-shrink drop-shadow-xl projectCard">
          <p className="text-4xl">React Chat App</p>
          <p className="text-2xl mt-2">
            Whatsapp like chat platform using React and Socket.io.
          </p>
          <div className="flex justify-between mt-3">
            <a
              href="https://github.com/mickpurple/react-chat-app"
              rel="noreferrer"
              target="_blank"
            >
              <p className="text-2xl text-neutral-300">code</p>
            </a>
          </div>
        </div>

        <div className="bg-[#333] border border-[#444] rounded-xl p-5 flex-shrink drop-shadow-xl projectCard">
          <p className="text-4xl">VCT Tracker</p>
          <p className="text-2xl mt-2">
            Native iOS app for tracking scores of ongoing VCT matches, made
            using Swift.
          </p>
          <p className="text-2xl text-neutral-300 mt-2">demo page WIP</p>
        </div>

        <div className="bg-[#333] border border-[#444] rounded-xl p-5 drop-shadow-xl projectCard">
          <p className="text-2xl">MORE PROJECTS COMIGN SOON</p>
        </div>
      </div>
    </div>
  );
}
