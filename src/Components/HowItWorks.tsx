
const HowItWorks = () => {
  return (
<section className=" py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-5xl italic text-center mb-12 text-white/50">How It Works</h2>
    <div className="grid md:grid-cols-3 gap-8 md:mx-0 mx-[40px] ">
      <div className="text-center bg-yellow-100/10
       py-7 px-4 rounded-2xl shadow-2xl">
        <div className="bg-white/20 w-16 h-16 
        rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-search h-8 w-8 text-yellow-400"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">1. Browse Skills</h3>
        <p className="text-white/50">
          Explore skills offered by our community members. Filter by category,
          level, and more.
        </p>
      </div>
      <div className="text-center  bg-yellow-100/10
       py-7 px-4 rounded-2xl shadow-2xl">
        <div className="bg-white/20 w-16 h-16 
        rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-users h-8 w-8 text-yellow-400"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">2. Request Skills</h3>
        <p className="text-white/50">
          Found something interesting? Send a request to connect with the skill
          provider.
        </p>
      </div>
      <div className="text-center  bg-yellow-100/10
       py-7 px-4 rounded-2xl shadow-2xl">
        <div className="bg-white/20 w-16 h-16 rounded-full flex items-center
         justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-zap h-8 w-8 text-yellow-400"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 
            6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0
             1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">3. Offer Your Skills</h3>
        <p className="text-white/50">
          Share your expertise with others. Create skill offerings and help the
          community grow.
        </p>
      </div>
    </div>
  </div>
</section>
  );
}

export default HowItWorks