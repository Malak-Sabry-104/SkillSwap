import { BrainCircuit } from "lucide-react";

const Hero = () => {
  return (
    <section className=" text-white flex flex-col 
    md:flex-row justify-between items-center gap-10 md:gap-20 px-10 h-[120vh]">
      {/* Left Content */}
      <div className="md:mt-0 mt-16 md:w-1/2">
        <div className="content ">
          <h1 className="md:text-6xl text-[35px] font-semibold mb-4 p-3 mt-[2rem]">Share Skills Learn Together</h1>
          {/* <h1 className="text-6xl font-semibold mb-4 p-3">Learn Together</h1> */}
          <p className="mb-6 text-white/60 pl-3">
            Connect with others to teach what you know and learn what you need.
            SkillSwapy makes skill sharing simple and rewarding.
          </p>
        </div>

        {/* Buttons */}
        <div className="p-3 flex items-center gap-7 mt-12">
          <a
            href="/skills"
            className="text-xs md:text-md text-center relative z-20 bg-yellow-400/50 text-white/60 py-3 px-6 rounded-lg font-semibold transition duration-300 ease-in-out hover:shadow-lg hover:shadow-[#48234F]/30 transform hover:-translate-y-1 hover:scale-100 focus:outline-none ring-1 ring-white/10"
          >
            Explore Skills
          </a>
          <a
            href="/"
            className="text-xs md:text-md text-center relative z-20 bg-transparent text-white/60 py-3 px-6 rounded-lg font-semibold transition duration-300 ease-in-out hover:shadow-lg hover:shadow-yellow-400/30 transform hover:-translate-y-1 hover:scale-100 focus:outline-none ring-2 ring-yellow-400/30"
          >
            Offer a Skill
          </a>
        </div>
      </div>

      {/* Right Icon */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <BrainCircuit className="w-88 h-88 text-yellow-500/30 animate-pulse drop-shadow-[0_0_15px_#EFD5CA] transition-all duration-300" />
      </div>
    </section>
  );
};

export default Hero;
