import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const { setAuthUser } = useAuth(); // ✅ Correct way to destructure

  const handleLogout = () => {
    try {
      setAuthUser(null); // ✅ Set user state to null
      localStorage.removeItem("Users"); // ✅ Remove from localStorage
      toast.success("Logout successful!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
