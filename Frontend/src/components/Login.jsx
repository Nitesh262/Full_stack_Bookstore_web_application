import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider"; // ✅ Import AuthProvider

function Login({ isOpen, closeModal, openSignup }) {
  console.log("🔄 Login Component Loaded");
  console.log("🛠 Props received in Login:", { isOpen, closeModal, openSignup });

  const { setAuthUser } = useAuth(); // ✅ Get setAuthUser from AuthProvider

  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      console.log(res.data);

      if (res.data) {
        toast.success("Logged in successfully...");

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

        <h3 className="font-bold text-lg text-black text-center">Login</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div className="flex flex-col items-center mt-6 space-y-3">
            <button type="submit" className="bg-pink-500 text-white w-full text-center py-2 rounded-md hover:bg-pink-600 transition duration-200">
              Login
            </button>
            <p className="text-gray-700 text-sm">
              Not registered?{" "}
              <span
                className="underline text-pink-500 cursor-pointer hover:text-pink-700"
                onClick={() => {
                  console.log("🔄 Switching to Signup");
                  closeModal();
                  openSignup();
                }}
              >
                Signup
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
