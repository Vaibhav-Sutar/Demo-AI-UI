import React from "react";
import Single from "./Single";

export const Product = () => {
  return (
    <main className="w-full mt-12 sm:pt-3 sm:mt-0">
      {/* <!-- row --> */}
      <div className="flex sm:w-4/6 sm:mt-4 m-auto mb-2 bg-white shadow-lg">
        {/* <!-- signup column --> */}
        <div className="bg-white">
          <div className="mx-auto max-w-1xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
            <h1 className="flex items-center justify-center h-full text-3xl font-bold tracking-tight text-gray-900">
              Gift Guide - Results
            </h1>
            <div className="text-2xl flex items-center justify-center h-full">
              Here are the AI curated gift ideas based on your inputs:
            </div>

            <div className="  hover:shadow-xl mt-6 grid grid-cols-3 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              <Single />
              <Single />
              <Single />
              <Single />
              <Single />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
