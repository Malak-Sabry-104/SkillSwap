import { useSkillContext } from "../Components/SkillContext"; 
import { Link } from "react-router-dom";

const MySkills = () => {
  const { addSkill, removeSkill } = useSkillContext();

  const { skills } = useSkillContext();

  return (
    <main className="flex-1 mt-[4rem]">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Skills</h1>
            <p className="text-gray-600">
              Manage your skill offerings and see how others are responding to
              them.
            </p>
          </div>
          <Link
            to="/offer"
            className="bg-yellow-500 hover:bg-yellow-600
             text-black font-medium h-10 px-4 py-2 rounded-md flex items-center justify-center  gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Add Skill
          </Link>
        </div>

        {/* Skill List or Empty State */}
        {skills.length === 0 ? (
          <div className="rounded-lg border bg-black/20 text-gray-700 text-center py-12 shadow">
            <div className="p-6 pt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user mx-auto mb-4 text-gray-400"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <h3 className="text-xl font-semibold mb-2">No Skills Yet</h3>
              <p className="text-gray-600 mb-6">
                You haven't added any skills yet. Start sharing your expertise
                with the community!
              </p>
              <Link
                to="/offer"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium h-10 px-4 py-2 rounded-md inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                Offer Your First Skill
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="border border-yellow-500/20 bg-white/5 backdrop-blur-md 
             rounded-2xl p-5 shadow transition-all hover:shadow-lg hover:border-yellow-400
             text-white capitalize space-y-2"
              >
                <h3 className="text-2xl font-bold text-yellow-400">
                  {skill.title}
                </h3>
                <button
                  onClick={() => removeSkill(skill.id)}
                  className="text-red-500 hover:text-red-600 text-sm"
                >
                  Delete
                </button>
                <p className="text-sm text-white/70 leading-relaxed line-clamp-3">
                  {skill.description}
                </p>
                <div className="flex gap-2 flex-wrap text-xs text-gray-400 mt-2">
                  <span className="bg-white/10 px-2 py-0.5 rounded-md">
                    {skill.category}
                  </span>
                  <span className="bg-white/10 px-2 py-0.5 rounded-md">
                    {skill.level}
                  </span>
                  <span className="bg-white/10 px-2 py-0.5 rounded-md">
                    {skill.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MySkills;
