import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/20  mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a
              href="/"
              className="text-2xl font-bold text-yellow-400 mb-4 block"
            >
              skillswapy
            </a>
            <p className="text-white/60 mb-4">
              Connecting people through skill sharing and collaborative
              learning. Share what you know, learn what you need.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-white/60 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                  className="lucide lucide-github h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="mailto:hello@skillswapy.com"
                className="text-gray-400 hover:text-white/60 transition-colors"
              >
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
                  className="lucide lucide-mail h-5 w-5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/skills"
                  className="text-white/60 hover:underline transition-colors"
                >
                Explore Skills
                </a>
              </li>
              <li>
                <a
                  href="/offer"
                  className="text-white/60 hover:underline transition-colors"
                >
                  Offer a Skill
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white/60 hover:underline transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white/60 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/login"
                  className="text-white/60 hover:underline transition-colors"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  className="text-white/60 hover:underline transition-colors"
                >
                  Register
                </a>
              </li>
              <li>
                <a
                  href="/my-skills"
                  className="text-white/60 hover:underline transition-colors"
                >
                  My Skills
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 skillswapy. Built with{" "}
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
              className="lucide lucide-heart inline h-4 w-4 text-red-500"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>{" "}
          By Malak Sabry.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Demo project - Skill requests are simulated
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
