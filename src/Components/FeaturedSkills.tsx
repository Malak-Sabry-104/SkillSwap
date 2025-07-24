const FeaturedSkills = () => {
  return (
    <section className="
    py-16 bg-gradient-to-t from-black-10 via-zinc-900 to-zinc-800 text-yellow-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl italic font-extrabold text-center mb-16 text-yellow-200 drop-shadow-md">
          Featured Skills
        </h2>

        <div className="md:mx-0 mx-[40px] grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, i) => {
            const data = [
              {
                category: "Music",
                level: "Beginner",
                title: "Guitar Lessons for Beginners",
                desc: "Learn basic chords and strumming patterns",
                author: "Sarah Johnson",
                time: "1 hour",
                href: "/skill/1",
              },
              {
                category: "Technology",
                level: "Intermediate",
                title: "React Development Mentoring",
                desc: "One-on-one React coaching and code review",
                author: "Mike Chen",
                time: "2 hours",
                href: "/skill/2",
              },
              {
                category: "Art",
                level: "Advanced",
                title: "Digital Portrait Drawing",
                desc: "Learn professional digital art techniques",
                author: "Emma Davis",
                time: "3 hours",
                href: "/skill/3",
              },
            ][i];

            return (
              <div
                key={i}
                className="rounded-2xl bg-zinc-900 border border-yellow-700/30 shadow-lg hover:shadow-yellow-500/10 transition-all duration-500 hover:scale-[1.02] group overflow-hidden"
              >
                <div className="flex flex-col space-y-3 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block text-xs font-bold bg-yellow-800/30 text-yellow-300 px-3 py-1 rounded-full uppercase tracking-wide">
                      {data.category}
                    </span>
                    <span className="inline-block text-xs font-medium text-yellow-200 bg-yellow-700/20 border border-yellow-600/40 px-3 py-1 rounded-full">
                      {data.level}
                    </span>
                  </div>

                  <h3 className="font-semibold text-lg text-yellow-100  transition-colors">
                    {data.title}
                  </h3>
                  <p className="text-sm text-yellow-400">{data.desc}</p>
                </div>

                <div className="pt-4 p-6  border-t border-yellow-700/30 flex justify-between items-center">
                  <div className="text-sm text-yellow-400 leading-tight">
                    <p className="font-medium">{data.author}</p>
                    <p>{data.time}</p>
                  </div>
                  <a
                    href={data.href}
                    className="inline-flex items-center text-sm font-medium text-yellow-300 border border-yellow-500 hover:bg-yellow-700 hover:text-black px-4 py-1.5 rounded-md transition-all duration-300"
                  >
                    View →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSkills;
