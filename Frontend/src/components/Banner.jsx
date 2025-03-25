import React from "react";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-16 md:mt-32 order-2 md:order-1">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>

            <p className="text-xl">
            🚀 Unlock new opportunities every day! Explore, learn, and grow with endless possibilities waiting just for you.  
            📚 Start your journey today and turn curiosity into knowledge! 
            </p>

            {/* Email Box */}
            <label className="px-3 py-2 border rounded-md flex items-center gap-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="mail@site.com"
                required
                className="grow outline-none"
              />
            </label>

            {/* Button */}
            <button className="btn btn-secondary mt-6">Get Started</button>
          </div>
        </div>

        {/* Right Image (Responsive) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
          <div className="mt-10 md:mt-26 mb-6 md:mb-16">
            <img
              src="/Banner.png"
              alt="Banner"
              className="w-[90%] md:w-[80%] lg:w-[500px] max-w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
