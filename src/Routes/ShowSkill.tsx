import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, User, Clock } from "lucide-react";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useSupabase } from "../Components/SkillContext";

export default function SkillDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const supabase = useSupabase();
  const [skill, setSkill] = useState(null);
  const [profile, setProfile] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user || null);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, [supabase]);

  useEffect(() => {
    const fetchSkill = async () => {
      setLoading(true);
      setError("");
      // Fetch skill by id
      const { data, error } = await supabase.from("skills").select("*").eq("id", id).single();
      if (error || !data) {
        setError("Skill Not Found");
        setLoading(false);
        return;
      }
      setSkill(data);
      // Fetch profile
      const { data: profileData } = await supabase.from("profiles").select("name").eq("id", data.user_id).single();
      setProfile(profileData);
      // Fetch related skills
      const { data: relatedSkills } = await supabase
        .from("skills")
        .select("*")
        .eq("category", data.category)
        .neq("id", id)
        .limit(4);
      setRelated(relatedSkills || []);
      setLoading(false);
    };
    if (id) fetchSkill();
  }, [id, supabase]);

  if (loading) {
    return <div className="text-center text-yellow-200 py-12 mt-[5rem]">Loading...</div>;
  }

  if (error || !skill) {
    return (
      <div className="text-center text-yellow-200 py-12 mt-[5rem]">
        <h1 className="text-3xl font-bold mb-4">Skill Not Found</h1>
        <button
          onClick={() => navigate("/skills")}
          className="px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition"
        >
          ← Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div className="pt-[6rem] min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] text-yellow-100 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate("/skills")}
          className="flex items-center text-sm mb-6 text-yellow-300 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Browse
        </button>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Main Skill Card */}
          <div className="md:col-span-2 bg-yellow-100/5 border border-yellow-500/20 p-8 rounded-2xl shadow-2xl backdrop-blur-md">
            <div className="flex gap-2 mb-4">
              <span className="text-xs bg-yellow-400 text-black px-3 py-1 rounded-full">
                {skill.category}
              </span>
              <span className="text-xs border border-yellow-400 text-yellow-200 px-3 py-1 rounded-full">
                {skill.level}
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3">{skill.title}</h1>
            <p className="text-yellow-100/90 mb-6">{skill.description}</p>
            <div className="flex items-center gap-6 text-sm text-yellow-300 mb-6">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>
                  Offered by <strong>{profile?.name || skill.user_id}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>
                  Duration: <strong>{skill.duration}</strong>
                </span>
              </div>
            </div>
            <button
              onClick={async () => {
                if (!user) {
                  toast.error("You must be logged in to request a skill.");
                  return;
                }
                const { data: requesterProfile } = await supabase.from("profiles").select("email").eq("id", user.id).single();
                const { error: reqError } = await supabase.from("requests").insert([
                  {
                    skill_id: skill.id,
                    owner_id: skill.user_id,
                    requester_id: user.id,
                    requester_email: requesterProfile?.email || user.email,
                  },
                ]);
                if (reqError) {
                  toast.error("Failed to send request: " + reqError.message);
                } else {
                  toast.success("Skill Requested Successfully!");
                }
              }}
              className="cursor-pointer bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300 transition font-semibold"
            >
              Request This Skill
            </button>
          </div>
          {/* Right Side - More Skills */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">
              More {skill.category} Skills
            </h2>
            {related.length === 0 && <div className="text-yellow-300">No related skills found.</div>}
            {related.map((s) => (
              <div
                key={s.id}
                className="bg-yellow-100/5 border border-yellow-500/20 rounded-lg p-4 flex justify-between items-center backdrop-blur-md"
              >
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-xs text-yellow-300">{s.level}</p>
                  <p className="text-sm text-yellow-400">By {s.user_id}</p>
                </div>
                <button
                  onClick={() => navigate(`/skill/${s.id}`)}
                  className="text-sm text-yellow-300 hover:underline"
                >
                  View →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
