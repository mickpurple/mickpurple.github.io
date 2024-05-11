export default function Projects() {
  const ProjectCard = ({ link, image }) => {
    return (
      <div
        className={`flex justify-center items-center bg-[#ebebeb] rounded-[25px] hover:rounded-[40px] transition-[border-radius] duration-300 card`}
      >
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="w-full h-full p-5 flex items-center justify-between"
        >
          <img
            src={image}
            alt="GitHub"
            className="h-24 w-24 object-scale-down mx-auto"
          />
        </a>
      </div>
    );
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen py-10">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 md:grid-rows-2">
        <div className="place-self-end flex items-ends gap-5 ">
          <a href="/" rel="noreferrer" className="h-fit">
            <div className="h-[100px] w-[100px] bg-[#5b5775] rounded-xl p-5">
              <p className="text-4xl">back</p>
            </div>
          </a>

          <div className="min-h-[300px] w-[200px] bg-[#5b5775] rounded-xl p-5">
            <p className="text-4xl">Myra Site</p>
            <p className="text-2xl mt-2">
              A dummy jewellery site, created in React with TailwindCSS and
              GSAP.
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
        </div>
        <div className="min-h-[200px] w-[300px] bg-[#685775] rounded-xl self-end p-5">
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
        <div className="min-h-[200px] h-fit min-w-[300px] max-w-[350px] bg-[#575d75] rounded-xl p-5">
          <p className="text-4xl">VCT Tracker</p>
          <p className="text-2xl mt-2">
            Native iOS app for tracking scores of ongoing VCT matches, made
            using Swift.
          </p>
          <p className="text-2xl text-neutral-300 mt-2">demo page WIP</p>
        </div>
        <div className="h-[300px] w-[200px] bg-[#715775] rounded-xl p-5">
          <p className="text-2xl">MORE PROJECTS COMIGN SOON</p>
        </div>
      </div>
    </div>
  );
}
