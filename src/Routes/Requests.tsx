import { useEffect, useState } from "react";
import { useSupabase } from "../Components/SkillContext";

const RequestsPage = () => {
  const supabase = useSupabase();
  const [user, setUser] = useState(null);
  const [requests, setRequests] = useState([]);
  const [skillsMap, setSkillsMap] = useState({});
  const [loading, setLoading] = useState(true);

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
    const fetchRequests = async () => {
      if (!user) return;
      setLoading(true);
      // Get all requests where the logged-in user is the owner (skill owner)
      const { data, error } = await supabase
        .from("requests")
        .select("*, skill_id, requester_email")
        .eq("owner_id", user.id)
        .order("created_at", { ascending: false });
      if (!error && data) {
        setRequests(data);
        // Fetch all skill titles for mapping
        const skillIds = [...new Set(data.map((r) => r.skill_id))];
        if (skillIds.length > 0) {
          const { data: skills } = await supabase
            .from("skills")
            .select("id, title")
            .in("id", skillIds);
          const map = {};
          skills?.forEach((s) => { map[s.id] = s.title; });
          setSkillsMap(map);
        }
      }
      setLoading(false);
    };
    fetchRequests();
  }, [user, supabase]);

  if (!user) {
    return <div className="mt-[5rem] text-center text-white">Please log in to view your requests.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10 text-white mt-[5rem]">
      <h1 className="text-3xl font-bold mb-8 text-yellow-400 text-center">Skill Requests</h1>
      {loading ? (
        <div className="text-center text-yellow-300">Loading...</div>
      ) : requests.length === 0 ? (
        <div className="text-center text-yellow-300">No requests received yet.</div>
      ) : (
        <div className="max-w-2xl mx-auto space-y-6">
          {requests.map((req) => (
            <div key={req.id} className="bg-yellow-100/10 border border-yellow-400/20 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-lg">
              <div>
                <div className="text-lg font-semibold text-yellow-300 mb-1">{skillsMap[req.skill_id] || "(Skill)"}</div>
                <div className="text-sm text-yellow-100">Request from: <span className="font-bold text-yellow-200">{req.requester_email}</span></div>
                <div className="text-xs text-yellow-400 mt-1">Requested on: {new Date(req.created_at).toLocaleString()}</div>
              </div>
              <a href={`mailto:${req.requester_email}`} className="mt-2 md:mt-0 px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition text-sm">Contact</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RequestsPage;