import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  skills: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  skills?: string;
}

export default function SignUpCard() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    skills: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.username.trim()) newErrors.username = "Username is required";

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.skills.trim()) newErrors.skills = "Skills are required";

    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        skills: "",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background planets */}
      <div className="absolute w-[700px] h-[700px] bg-yellow-300 rounded-full top-[-150px] left-[-200px] blur-3xl opacity-30"></div>
      <div className="absolute w-[600px] h-[600px] bg-yellow-200 rounded-full bottom-[-200px] right-[-150px] blur-3xl opacity-30"></div>

      <div className="relative bg-black/30 backdrop-blur-md border border-white/10 p-10 rounded-3xl shadow-xl w-[400px] text-white">
        <div className="text-center mb-6">
          <div className="text-5xl mb-4">🪐</div>
          <h2 className="text-2xl font-semibold">Saturn</h2>
          <p className="text-sm text-gray-300">Create your account</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          {["name", "email", "username", "password", "confirmPassword", "skills"].map((field) => (
            <div key={field}>
              <input
                type={field.includes("password") ? "password" : "text"}
                name={field}
                placeholder={
                  field === "confirmPassword"
                    ? "Confirm Password"
                    : field.charAt(0).toUpperCase() + field.slice(1)
                }
                value={(formData as any)[field]}
                onChange={handleChange}
                className={`w-full bg-transparent border-b py-2 px-1 focus:outline-none placeholder-white ${
                  (errors as any)[field] ? "border-red-500" : "border-gray-400"
                }`}
              />
              {(errors as any)[field] && (
                <p className="text-xs text-red-500 mt-1">
                  {(errors as any)[field]}
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-300 to-yellow-400 text-black font-semibold rounded-xl mt-4 hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <span className="text-yellow-300 hover:underline cursor-pointer">
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}
