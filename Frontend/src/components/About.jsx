import React from "react";
import Navbar from "../components/Navbar"; // ✅ Import Navbar

function About() {
  return (
    <>
      <Navbar /> {/* ✅ Ensure Navbar is included */}

      <div className="bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-white py-16 px-6 md:px-20 min-h-screen">
        <div className="max-w-5xl mx-auto text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">📖 About Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Welcome to <strong>[Your Bookstore Name]</strong>, the ultimate destination for book lovers!
            Whether you're looking for <span className="text-pink-500 font-semibold">free books</span> or 
            <span className="text-pink-500 font-semibold"> premium bestsellers</span>, we have something for everyone.
          </p>

          <h3 className="text-2xl font-semibold mt-8">🎯 Our Mission</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            We believe that knowledge should be accessible to all. That’s why we provide a mix of
            <strong> free</strong> and <strong> paid</strong> books, ensuring readers from all backgrounds can enjoy learning and entertainment.
          </p>

          <h3 className="text-2xl font-semibold mt-8">💡 Why Choose Us?</h3>
          <ul className="mt-4 space-y-3 text-lg text-gray-700 dark:text-gray-300">
            <li>✅ <strong>Exclusive Access:</strong> Get free and premium books with a <strong>yearly subscription</strong>.</li>
            <li>✅ <strong>Bestselling Categories:</strong> Our most popular books include <strong>Business & Adventure</strong> genres.</li>
            <li>✅ <strong>Seamless Reading:</strong> A user-friendly platform with easy browsing and downloads.</li>
            <li>✅ <strong>Community & Support:</strong> Engage with fellow readers and get recommendations.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8">📲 Connect With Us</h3>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-pink-500 hover:underline">YouTube</a>
            <a href="#" className="text-pink-500 hover:underline">Twitter</a>
            <a href="#" className="text-pink-500 hover:underline">Facebook</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
