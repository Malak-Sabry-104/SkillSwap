import { useState } from "react";
import { LogOut, User } from "lucide-react";

const NavBar = () => {
  const isAuthenticated = true;
  const userName = "John Doe";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg shadow-lg border-b border-yellow-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="/"
            className="text-3xl font-bold text-yellow-400 tracking-wide"
          >
            skillswapy
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="/skills"
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            >
              Explore Skills
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            >
              About
            </a>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-gray-300">
                  Welcome, <span className="font-medium">{userName}</span>
                </span>

                <a
                  href="/my-skills"
                  className="inline-flex items-center px-4 py-1.5 rounded-md border border-yellow-500 text-sm font-medium text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
                >
                  <User className="h-4 w-4 mr-2" />
                  My Skills
                </a>

                <a
                  href="/offer"
                  className="bg-yellow-500 text-black text-sm font-semibold px-4 py-1.5 rounded-md hover:bg-yellow-400 transition"
                >
                  Offer Skill
                </a>

                <a
href="/login"
className="text-gray-300 hover:text-red-500 transition"
                >
                  <LogOut className="h-5 w-5" />
                </a>
              </>
            ) : (
              <>
                <a
                  href="/login"
                  className="text-sm font-medium text-gray-300 hover:text-white hover:bg-yellow-500 hover:bg-opacity-10 border border-yellow-500 px-4 py-2 rounded transition"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="bg-yellow-500 text-black text-sm font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition"
                >
                  Register
                </a>
              </>
            )}
          </div>

          {/* Hamburger Toggle Button - Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-yellow-400 hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <>
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4">
            <a
              href="/"
              className="text-gray-300 hover:text-yellow-400 px-2 transition"
            >
              Home
            </a>
            <a
              href="/skills"
              className="text-gray-300 hover:text-yellow-400 px-2 transition"
            >
              Explore Skills
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-yellow-400 px-2 transition"
            >
              About
            </a>

            <hr className="border-yellow-500/30 my-2" />

            {isAuthenticated ? (
              <>
                <span className="text-sm text-gray-300 px-2">
                  Welcome, <span className="font-medium">{userName}</span>
                </span>
                <a
                  href="/my-skills"
                  className="text-yellow-400 px-2 transition hover:text-yellow-300"
                >
                  My Skills
                </a>
                <a
                  href="/offer"
                  className="text-yellow-400 px-2 transition hover:text-yellow-300"
                >
                  Offer Skill
                </a>
                <a href="/login" className="text-red-400 px-2 text-left">
                  Logout
                </a>
              </>
            ) : (
              <>
                <a
                  href="/login"
                  className="text-gray-300 hover:text-white px-2 transition"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="text-yellow-400 hover:text-yellow-300 px-2 transition"
                >
                  Register
                </a>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
