import React from "react";

function Cards({ item }) {
  console.log("Item Data:", item); // Debugging

  if (!item || Object.keys(item).length === 0) {
    return null; // Don't render anything if no data
  }

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          {item.image ? (
            <img src={item.image} alt={item.title} />
          ) : (
            <p className="text-red-500">No Image Available</p>
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            {/* ✅ Ensure price is visible in dark mode */}
            <div className="badge badge-outline dark:border-white dark:text-white">
              ${item.price}
            </div>

            {/* ✅ Ensure Buy Now button is always visible */}
            <div className="cursor-pointer px-2 py-1 rounded-full border-2 border-black dark:border-white hover:bg-pink-500 hover:text-white duration-200 mr-12">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
