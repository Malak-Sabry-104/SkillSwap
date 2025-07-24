import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSkillContext } from "../Components/SkillContext";

const Offer = () => {
  const { addSkill } = useSkillContext();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
    duration: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
    duration: "",
  });

  const validateForm = () => {
    const newErrors: typeof errors = {
      title: "",
      description: "",
      category: "",
      level: "",
      duration: "",
    };

    if (!form.title.trim()) newErrors.title = "Title is required.";
    if (form.description.trim().length < 20)
      newErrors.description = "Description must be at least 20 characters.";
    if (!form.category) newErrors.category = "Please select a category.";
    if (!form.level) newErrors.level = "Please select a difficulty level.";
    if (!form.duration) newErrors.duration = "Please select a session duration.";

    setErrors(newErrors);

    // Check if any error message exists
    return Object.values(newErrors).every((msg) => msg === "");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" })); // Clear error on change
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const newSkill = {
        id: Date.now(),
        ...form,
      };
      addSkill(newSkill);
      navigate("/my-skills");
    }
  };

  const inputStyle =
    "w-full h-10 px-3 py-2 text-sm rounded-md border bg-zinc-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 outline-none";
  const errorStyle = "text-sm text-red-500";

  return (
    <section className="flex-1 mt-[5rem] bg-black min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-yellow-400 mb-3 text-center">Offer a Skill</h1>

          <form onSubmit={handleSubmit} className="bg-zinc-900/60 border border-yellow-500/30 rounded-2xl shadow-lg p-6 space-y-6 backdrop-blur-md">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium">Skill Title *</label>
              <input
                id="title"
                value={form.title}
                onChange={handleChange}
                className={`${inputStyle} border-zinc-700 ${errors.title && "border-red-500"}`}
                placeholder="e.g., Guitar Lessons for Beginners"
              />
              {errors.title && <p className={errorStyle}>{errors.title}</p>}
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium">Description *</label>
              <textarea
                id="description"
                value={form.description}
                onChange={handleChange}
                className={`min-h-[120px] ${inputStyle} border-zinc-700 ${errors.description && "border-red-500"}`}
                placeholder="What you'll teach, what students will learn..."
              />
              <p className="text-sm text-gray-400">{form.description.length}/500 characters (min 20)</p>
              {errors.description && <p className={errorStyle}>{errors.description}</p>}
            </div>

            {/* Category & Level */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium">Category *</label>
                <select
                  id="category"
                  value={form.category}
                  onChange={handleChange}
                  className={`${inputStyle} border-zinc-700 ${errors.category && "border-red-500"}`}
                >
                  <option value="">Select a category</option>
                  <option value="Technology">Technology</option>
                  <option value="Art">Art</option>
                  <option value="Music">Music</option>
                  <option value="Language">Language</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Business">Business</option>
                  <option value="Cooking">Cooking</option>
                  <option value="Other">Other</option>
                </select>
                {errors.category && <p className={errorStyle}>{errors.category}</p>}
              </div>

              <div>
                <label htmlFor="level" className="block text-sm font-medium">Level *</label>
                <select
                  id="level"
                  value={form.level}
                  onChange={handleChange}
                  className={`${inputStyle} border-zinc-700 ${errors.level && "border-red-500"}`}
                >
                  <option value="">Select difficulty level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                {errors.level && <p className={errorStyle}>{errors.level}</p>}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label htmlFor="duration" className="block text-sm font-medium">Session Duration *</label>
              <select
                id="duration"
                value={form.duration}
                onChange={handleChange}
                className={`${inputStyle} border-zinc-700 ${errors.duration && "border-red-500"}`}
              >
                <option value="">Select session duration</option>
                <option value="30 minutes">30 minutes</option>
                <option value="1 hour">1 hour</option>
                <option value="1.5 hours">1.5 hours</option>
                <option value="2 hours">2 hours</option>
                <option value="2.5 hours">2.5 hours</option>
                <option value="3 hours">3 hours</option>
                <option value="3+ hours">3+ hours</option>
              </select>
              {errors.duration && <p className={errorStyle}>{errors.duration}</p>}
            </div>

            {/* Static Author */}
            <div className="bg-zinc-800 px-4 py-3 border border-zinc-700 text-sm text-gray-300 rounded-lg">
              <strong>Offered by:</strong> John Doe
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-10 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md transition"
            >
              Add Skill
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Offer;
