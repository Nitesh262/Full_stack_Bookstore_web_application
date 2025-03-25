import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { authUser } = useAuth(); // ✅ Auth state

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (theme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
    console.log("Theme Applied:", theme); // Debugging
  }, [theme]);

const toggleTheme = () => {
 console.log("hello")
  setTheme((prev) => {
    console.log("previous value : ",prev)
    const newTheme = prev === "light" ? "dark" : "light";
console.log("newtheme",newTheme)
    // ✅ Force apply theme immediately
    if (newTheme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return newTheme;
  });
};

  

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center py-4">
            {/* Left side - Brand Name */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-black dark:text-white">
                bookStore
              </Link>
            </div>

            {/* ✅ Desktop Menu */}
            <div className="hidden lg:flex space-x-6 items-center">
              <Link to="/" className="hover:text-gray-500 dark:hover:text-gray-300">Home</Link>
              <Link to="/course" className="hover:text-gray-500 dark:hover:text-gray-300">Course</Link>
              <Link to="/about" className="hover:text-gray-500 dark:hover:text-gray-300">About</Link>
              <Link to="/contact" className="hover:text-gray-500 dark:hover:text-gray-300">Contact</Link>

              {/* ✅ Search Box */}
              <input
                type="text"
                placeholder="Search books..."
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-pink-500 dark:bg-gray-800 dark:text-white"
              />

              {/* ✅ Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="px-4 py-2 border rounded-md text-black dark:text-white"
              >
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
              </button>

              {/* ✅ Login / Logout Button */}
              {authUser ? (
                <Logout />
              ) : (
                <button
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
                  onClick={() => setIsLoginOpen(true)}
                >
                  Login
                </button>
              )}
            </div>

            {/* ✅ Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black dark:text-white">
                {isMenuOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 shadow-md">
            <div className="px-6 py-4 space-y-3">
              <Link to="/" className="block text-black dark:text-white hover:text-gray-500">Home</Link>
              <Link to="/course" className="block text-black dark:text-white hover:text-gray-500">Course</Link>
              <Link to="/about" className="block text-black dark:text-white hover:text-gray-500">About</Link>
              <Link to="/contact" className="block text-black dark:text-white hover:text-gray-500">Contact</Link>

              {/* ✅ Search Box in Mobile Menu */}
              <input
                type="text"
                placeholder="Search books..."
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-pink-500 dark:bg-gray-800 dark:text-white"
              />

              {/* ✅ Theme Toggle Button in Mobile Menu */}
              <button
                onClick={toggleTheme}
                className="w-full py-2 border rounded-md text-black dark:text-white"
              >
                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </button>

              <div className="pt-3">
                {authUser ? (
                  <Logout />
                ) : (
                  <button
                    className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700 transition"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsLoginOpen(true);
                    }}
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ✅ Login & Signup Modals */}
      {isLoginOpen && (
        <Login
          isOpen={isLoginOpen}
          closeModal={() => setIsLoginOpen(false)}
          openSignup={() => {
            setIsLoginOpen(false);
            setIsSignupOpen(true);
          }}
        />
      )}

      {isSignupOpen && (
        <Signup
          isOpen={isSignupOpen}
          closeModal={() => setIsSignupOpen(false)}
          openLogin={() => {
            setIsSignupOpen(false);
            setIsLoginOpen(true);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
