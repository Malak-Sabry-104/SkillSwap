import { BrainCircuit } from "lucide-react";
const Hero = () => {
  return (
    <>
      <section className=" h-[100vh] text-white md:flex-row flex-col
      flex justigy-between items-center gap-[5rem] ">
        <div className="left md:mt-0 mt-[4rem] md:w-[50%] mx-[40px]">
          <div className="content ">
            <h1 className="text-6xl font-semibold  mb-1 p-3 pb-0">
              Share Skills{" "}
            </h1>
            <h1 className=" text-6xl font-semibold  mb-4 p-3">
              Learn Together..
            </h1>
            <p className=" mb-6 text-white/60 pl-3">
              Connect with others to teach what you know and learn what you
              need. SkillSwap makes skill sharing simple and rewarding.
            </p>
          </div>
          <div className="btns-group pl-3 flex gap-7 mt-[3rem]">
            <div className="relative">
              <a
              href="/skills"
                className="
                relative z-20 bg-yellow-400/50  text-white/60 py-3 px-6 rounded-lg font-semibold transition duration-300 ease-in-out  hover:shadow-lg hover:shadow-[#48234F]/30 transform hover:-translate-y-1 hover:scale-100 focus:outline-none
                bg-main-pink pinky-inset-shadowing ring-1 ring-white/10 "
              >
                Explore Skills
              </a>
            </div>
            <div className="relative">
              <a
              href="/"
                className="
                relative z-20 bg-transparent   text-white/60 py-3 px-6 rounded-lg
                 font-semibold transition duration-300 ease-in-out 
                 hover:shadow-lg hover:shadow-yellow-400/30 transform hover:-translate-y-1
                  hover:scale-100 focus:outline-none
               ring-2 ring-yellow-400/30 "
              >
                Offer a Skill
              </a>
            
            </div>
          </div>
        </div>
        <div className="brain-icon right w-[50%] flex justify-center items-center">
          <BrainCircuit className="w-[22rem] h-[22rem] text-yellow-500/30  animate-pulse drop-shadow-[0_0_15px_#EFD5CA] transition-all duration-300" />
        </div>
      </section>
    </>
  );
};

export default Hero;
