import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound404() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center text-center px-4">
      {/* Noise texture background */}
      <div className="absolute w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-pulse opacity-5 z-0" />

      {/* Star pattern overlay */}
      <div className="absolute inset-0 bg-black z-0 overflow-hidden">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-pulse opacity-20" />
      </div>

      {/* Main content - Glass Card */}
      <div className="z-10 text-white backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 shadow-2xl p-10 max-w-lg w-full">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 flex items-center justify-center gap-4 text-yellow-400 animate-pulse">
          <span className="drop-shadow-[0_0_15px_rgba(234,179,8,0.8)]">4</span>
          <span className="drop-shadow-[0_0_15px_rgba(234,179,8,0.8)]">0</span>
          <span className="drop-shadow-[0_0_15px_rgba(234,179,8,0.8)]">4</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-light mb-2 text-yellow-100">
          Oops! You ran out of oxygen.
        </h2>

        <p className="text-sm text-gray-400 mb-4">
          The page you're looking for is now beyond our reach.
        </p>

        <p className="text-sm text-gray-300">
          Returning to base in{" "}
          <span className="font-bold text-yellow-300">
            00:00:{countdown.toString().padStart(2, "0")}
          </span>
        </p>
      </div>
    </div>
  );
}
