import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider"; // ✅ Import Auth Context

function Signup({ isOpen, closeModal, openLogin }) {
  console.log("📢 Signup Component Received isOpen:", isOpen);
  const { setAuthUser } = useAuth(); // ✅ Get setAuthUser from AuthProvider

  useEffect(() => {
    console.log("🔄 Signup Component Re-rendered: isOpen =", isOpen);
  }, [isOpen]);

  if (!isOpen) {
    console.log("🚫 Signup Component Hidden");
    return null;
  }

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      console.log(res.data);

      if (res.data) {
        toast.success("Signup successful...");

        // ✅ Store user in AuthProvider and LocalStorage
        setAuthUser(res.data.user);
        localStorage.setItem("Users", JSON.stringify(res.data.user));

        closeModal();
      }
    } catch (err) {
      if (err.response) {
        console.error(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-black" onClick={closeModal}>
          ✕
        </button>

        <h3 className="font-bold text-lg text-black text-center">Sign Up</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <label className="text-black block mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              {...register("fullname", { required: "Full name is required" })}
            />
            {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
          </div>

          <div className="mt-4">
            <label className="text-black block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mt-4">
            <label className="text-black block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div className="flex flex-col items-center mt-6 space-y-3">
            <button type="submit" className="bg-pink-500 text-white w-full text-center py-2 rounded-md hover:bg-pink-600 transition duration-200">
              Sign Up
            </button>
            <p className="text-gray-700 text-sm">
              Already have an account?{" "}
              <span
                className="underline text-pink-500 cursor-pointer hover:text-pink-700"
                onClick={() => {
                  console.log("🔄 Switching to Login");
                  closeModal();
                  openLogin();
                }}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
