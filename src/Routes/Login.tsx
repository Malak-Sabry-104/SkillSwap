import { useState } from "react";
import { useSupabase } from '../Components/SkillContext';

const Login = () => {
  const supabase = useSupabase();
  const [form, setForm] = useState({ usernameOrEmail: "", password: "", remember: false });
  const [errors, setErrors] = useState({ usernameOrEmail: "", password: "", general: "" });
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = { usernameOrEmail: "", password: "", general: "" };
    let isValid = true;

    if (!form.usernameOrEmail.trim()) {
      newErrors.usernameOrEmail = "Username or Email is required";
      isValid = false;
    }

    if (!form.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setErrors((prev) => ({ ...prev, general: "" }));
    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.usernameOrEmail,
      password: form.password,
    });
    if (error) {
      setErrors((prev) => ({ ...prev, general: error.message }));
    } else {
      window.location.href = "/";
    }
    setLoading(false);
  };

  return (
    <div className="mt-[4rem] min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute w-[700px] h-[700px] bg-yellow-300 rounded-full top-[-150px] left-[-200px] blur-3xl opacity-30"></div>
      <div className="absolute w-[600px] h-[600px] bg-yellow-200 rounded-full bottom-[-200px] right-[-150px] blur-3xl opacity-30"></div>

      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-md bg-black/40 border border-white/20 rounded-3xl backdrop-blur-lg shadow-2xl p-8 text-white space-y-6">
        <div className="text-center space-y-2">
          <div className="text-5xl">🪐</div>
          <h2 className="text-2xl font-bold">Saturn</h2>
          <p className="text-sm text-gray-300">Welcome back!</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="block text-sm mb-1" htmlFor="usernameOrEmail">Username or Email</label>
            <input
              id="usernameOrEmail"
              name="usernameOrEmail"
              type="text"
              value={form.usernameOrEmail}
              onChange={handleChange}
              className={`w-full bg-transparent border-b px-1 py-2 text-white focus:outline-none ${
                errors.usernameOrEmail ? "border-red-500" : "border-gray-400 focus:border-yellow-300"
              }`}
            />
            {errors.usernameOrEmail && (
              <p className="text-red-500 text-xs mt-1">{errors.usernameOrEmail}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className={`w-full bg-transparent border-b px-1 py-2 text-white focus:outline-none ${
                errors.password ? "border-red-500" : "border-gray-400 focus:border-yellow-300"
              }`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-center gap-2 text-sm">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              checked={form.remember}
              onChange={handleChange}
              className="accent-yellow-400"
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          {errors.general && <p className="text-red-500 text-xs mt-1">{errors.general}</p>}
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200 text-black font-semibold mt-2 hover:opacity-90 transition"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-300">
          Don’t have an account?{" "}
          <a href="/register" className="text-white font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
