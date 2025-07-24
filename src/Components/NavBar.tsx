import { LogOut, User } from "lucide-react";

const NavBar = () => {
  const isAuthenticated = false;
  const userName = "John Doe";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg shadow-lg border-b border-yellow-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="text-3xl font-bold text-yellow-400 tracking-wide">
            SkillSwap
          </a>

          {/* Nav Links */}
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

          {/* Authenticated / Guest Buttons */}
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

                <button
                  onClick={() => alert("Logging out...")}
                  className="text-gray-300 hover:text-red-500 transition"
                >
                  <LogOut className="h-5 w-5" />
                </button>
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

          {/* Mobile Menu */}
          <button className="md:hidden text-yellow-400 hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
