import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const allSkills = [
  {
    id: 1,
    title: "Guitar Lessons for Beginners",
    category: "Music",
    level: "Beginner",
    duration: "1 hour",
    userName: "Sarah Johnson",
    description:
      "Learn basic chords and strumming patterns to get started with guitar",
  },
  {
    id: 2,
    title: "React Development Mentoring",
    category: "Technology",
    level: "Intermediate",
    duration: "2 hours",
    userName: "Mike Chen",
    description: "One-on-one React coaching and code review sessions",
  },
  {
    id: 3,
    title: "Digital Portrait Drawing",
    category: "Art",
    level: "Advanced",
    duration: "3 hours",
    userName: "Emma Davis",
    description:
      "Learn professional digital art techniques and portrait drawing",
  },
  {
    id: 4,
    title: "Spanish Conversation Practice",
    category: "Language",
    level: "Intermediate",
    duration: "1 hour",
    userName: "Carlos Rodriguez",
    description: "Practice conversational Spanish with a native speaker",
  },
  {
    id: 5,
    title: "Photography Basics",
    category: "Art",
    level: "Beginner",
    duration: "2 hours",
    userName: "Lisa Park",
    description: "Learn camera settings, composition, and basic editing",
  },
  {
    id: 6,
    title: "Python Programming",
    category: "Technology",
    level: "Beginner",
    duration: "3 hours",
    userName: "David Kim",
    description: "Introduction to Python programming for complete beginners",
  },
  {
    id: 7,
    title: "Yoga for Beginners",
    category: "Fitness",
    level: "Beginner",
    duration: "1 hour",
    userName: "Anna Thompson",
    description: "Gentle yoga poses and breathing techniques for beginners",
  },
  {
    id: 8,
    title: "Advanced Piano Techniques",
    category: "Music",
    level: "Advanced",
    duration: "2 hours",
    userName: "Robert Wilson",
    description: "Master advanced piano techniques and classical pieces",
  },
];

const categories = ["All", "Technology", "Art", "Music", "Language", "Fitness"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export default function BrowseSkillsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const navigate = useNavigate();

  const filteredSkills = useMemo(() => {
    return allSkills.filter((skill) => {
      const matchesSearch =
        skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || skill.category === selectedCategory;
      const matchesLevel =
        selectedLevel === "All" || skill.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  return (
    <div className="container mx-auto px-4 py-10 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-transparent bg-clip-text drop-shadow-lg">
        Browse Premium Skills
      </h1>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-300 h-4 w-4" />
        <input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-white/10 text-white placeholder-yellow-200 pl-10 pr-4 py-3 w-full rounded-xl backdrop-blur-md border border-yellow-300/20 focus:ring-2 focus:ring-yellow-400 transition"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 mb-6 ">
        {/* Category */}
        <div>
          <h3 className="mb-2 text-yellow-300 font-semibold">Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full cursor-pointer border transition text-sm font-medium ${
                  selectedCategory === cat
                    ? "bg-yellow-400 text-black shadow-lg"
                    : "bg-yellow-100/20 text-yellow-100 border-yellow-200/20 hover:bg-yellow-200/30"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Level */}
        <div>
          <h3 className="mb-2 text-yellow-300 font-semibold">Level</h3>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <span
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-1.5 rounded-full cursor-pointer border transition text-sm font-medium ${
                  selectedLevel === level
                    ? "bg-yellow-400 text-black shadow-lg"
                    : "bg-yellow-100/20 text-yellow-100 border-yellow-200/20 hover:bg-yellow-200/30"
                }`}
              >
                {level}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      {filteredSkills.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gradient-to-br from-yellow-100/10 to-yellow-300/10 backdrop-blur-xl p-5 rounded-2xl shadow-[inset_0_0_0.5px_rgba(255,255,255,0.2)] border border-yellow-200/20 transition transform hover:scale-[1.02]"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">
                  {skill.category}
                </span>
                <span className="text-xs font-semibold px-2 py-1 rounded-full border border-yellow-300 text-yellow-100">
                  {skill.level}
                </span>
              </div>
              <h2 className="text-lg font-bold text-yellow-200 mb-2">
                {skill.title}
              </h2>
              <p className="text-sm text-yellow-100/90">{skill.description}</p>

              <div className="flex justify-between items-center mt-6">
                <div className="text-xs text-yellow-200">
                  <p>{skill.userName}</p>
                  <p>{skill.duration}</p>
                </div>
                <button
                  onClick={() => navigate(`/skill/${skill.id}`)}
                  className="px-4 py-1.5 bg-yellow-400 text-black rounded-md text-sm font-medium hover:bg-yellow-300 transition"
                >
                  View →
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-yellow-300 mt-12">
          <h3 className="text-xl font-bold">No skills found</h3>
          <p className="text-yellow-100/80 mb-4">
            Try adjusting your search terms or filters.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
              setSelectedLevel("All");
            }}
            className="px-4 py-2 bg-yellow-400 text-black rounded-lg shadow hover:bg-yellow-300 transition"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
