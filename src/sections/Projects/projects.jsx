import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
    <div className="relative min-h-screen container mx-auto px-5 pt-10">
      <div className="flex flex-wrap gap-5 bg-[#7272723e] backdrop-blur-sm border-2 border-[#c9b7b733] rounded-[24px] p-5">
        <a
          href="/"
          rel="noreferrer"
          className="h-fit drop-shadow-xl hover:translate-y-1 hover:drop-shadow-2xl transition-transform"
        >
          <div className="h-[100px] w-[100px] bg-[#5b5775] rounded-xl p-5">
            <p className="text-4xl">back</p>
          </div>
        </a>

        <div className="bg-[#5b5775] rounded-xl p-5 drop-shadow-xl projectCard">
          <p className="text-4xl">Myra Site</p>
          <p className="text-2xl mt-2">
            A dummy jewellery site, created in React with TailwindCSS and GSAP.
          </p>
          <div className="flex justify-between mt-3">
            <a
              href="https://github.com/mickpurple/Myra-site"
              rel="noreferrer"
              target="_blank"
            >
              <p className="text-2xl text-neutral-300">code</p>
            </a>
            <a
              href="https://mickpurple.com/Myra-site/"
              rel="noreferrer"
              target="_blank"
            >
              <p className="text-2xl text-neutral-300">demo</p>
            </a>
          </div>
        </div>

        <div className="bg-[#685775] rounded-xl p-5 flex-shrink drop-shadow-xl projectCard">
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
        <div className="bg-[#575d75] rounded-xl p-5 flex-shrink drop-shadow-xl projectCard">
          <p className="text-4xl">VCT Tracker</p>
          <p className="text-2xl mt-2">
            Native iOS app for tracking scores of ongoing VCT matches, made
            using Swift.
          </p>
          <p className="text-2xl text-neutral-300 mt-2">demo page WIP</p>
        </div>
        <div className="bg-[#715775] rounded-xl p-5 drop-shadow-xl projectCard">
          <p className="text-2xl">MORE PROJECTS COMIGN SOON</p>
        </div>
      </div>
    </div>
  );
}
