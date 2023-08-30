import React from "react";
import { NavLink } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Single = () => {
  return (
    <div className="group relative">
      <div className="mt-4 flex justify-between">
        <div>
          <div className="bg-white rounded-lg p-3 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Product Name</h2>
            <p className="mb-2">Price: {354}</p>
            <p className="mb-2">Previous Price: {289}</p>
            <p className="mb-2">Condition: Condition</p>
            <p className="mb-2">Rating: {3} / 5</p>
            <p className="mb-2">Reviews: {6}</p>
            <p className="mb-2">Store Rating: {4} / 5</p>
            <p className="mb-2">Store Reviews: {4}</p>
            <p className="mb-2">Number of Comparisons: {9}</p>
            <p className="mb-2">Description: This is product description</p>
            <NavLink to="/">
              <button
                type="submit"
                className="text-white w-full py-3 bg-black shadow hover:shadow-xl rounded-sm font-medium"
              >
                Buy Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
