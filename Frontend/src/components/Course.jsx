import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Cards from "./Cards";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! 🙂</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Welcome to our collection of amazing books!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center px-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
