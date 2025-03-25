import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import About from "./components/About";



import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate






function App() {
  const navigate = useNavigate();
  const { authUser } = useAuth();
  const location = useLocation();

  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openSignup = () => {
    console.log("✅ Opening Signup Modal");
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  const openLogin = () => {
    console.log("✅ Opening Login Modal");
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  const closeModal = () => {
    console.log("🛑 Close button clicked!");
    console.log("🔴 Before update:", isSignupOpen, isLoginOpen);
    
    setIsSignupOpen(false);

    setIsLoginOpen(false);
// ✅ Redirect to Home if the user was on "/course"
if (location.pathname === "/course") {
  navigate("/");  

}
  };

  // ✅ Use useEffect to confirm state updates
  useEffect(() => {
    console.log("🟢 Modal State Updated:", { isSignupOpen, isLoginOpen });
  }, [isSignupOpen, isLoginOpen]);

  // ✅ Open Signup Modal when navigating to /course if not logged in
  useEffect(() => {
    if (location.pathname === "/course" && !authUser) {
      console.log("📢 Auto-opening Signup Modal for /course");
      setIsSignupOpen(true);
    }
  }, [location, authUser]);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : null} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* ✅ Render modals only when needed */}
      {isSignupOpen && <Signup isOpen={isSignupOpen} closeModal={closeModal} openLogin={openLogin} />}
      {isLoginOpen && <Login isOpen={isLoginOpen} closeModal={closeModal} openSignup={openSignup} />}

      <Toaster />
    </div>
  );
}

export default App;
