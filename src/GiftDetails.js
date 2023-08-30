import React from "react";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

import { NavLink } from "react-router-dom";
import RadioGroup from "@mui/material/RadioGroup";

const GiftDetails = () => {
  return (
    <main className="w-full mt-12 sm:pt-20 sm:mt-0">
      {/* <!-- row --> */}
      <div className="flex sm:w-3/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg">
        {/* <!-- signup column --> */}
        <div className="flex-1 overflow-hidden">
          <h1 class="text-4xl font-bold text-center mt-5">
            AI Curated Gift Ideas
          </h1>
          <h1 class="text-1xl text-center mt-5 px-5 mx-5">
            Our AI-powered tool will guide you in choosing the perfect gift when
            you're unsure about what to buy. Simply fill out the form below with
            information about the recipient and your budget, and we'll suggest a
            curated list of gifts!
          </h1>
          <h1 class="text-2xl font-bold text-left mt-5 ml-10 ">Gift Details</h1>
          {/* <!-- personal info procedure container --> */}
          <form encType="multipart/form-data" className="p-2 sm:p-10">
            <div className="flex flex-col gap-4 items-start">
              {/* <!-- input container column --> */}
              <div className="flex flex-col w-full justify-between sm:flex-col gap-3 items-center">
                <TextField
                  fullWidth
                  id="full-name"
                  label="Relationship"
                  name="name"
                  required
                />
                <TextField
                  fullWidth
                  id="full-name"
                  label="Age"
                  name="name"
                  required
                />
                <TextField
                  fullWidth
                  id="full-name"
                  label="Occasion"
                  name="name"
                  required
                />
                <TextField
                  fullWidth
                  id="email"
                  label="Interest"
                  type="email"
                  name="email"
                  required
                />
                <TextField
                  fullWidth
                  id="email"
                  label="Budget"
                  type="email"
                  name="email"
                  required
                />
              </div>
              {/* <!-- input container column --> */}

              {/* <!-- input container column --> */}

              <button
                type="submit"
                className="text-white w-full py-3 bg-black shadow hover:shadow-lg rounded-sm font-medium"
              >
                <NavLink to="/products">Submit</NavLink>
              </button>

              {/* <NavLink
                to="/login"
                className="hover:bg-gray-50 text-primary-blue text-center py-3 w-full shadow border rounded-sm font-medium"
              >
                Existing User? Log in
              </NavLink> */}
            </div>
          </form>
          {/* <!-- personal info procedure container --> */}
        </div>
        {/* <!-- signup column --> */}
      </div>
      {/* <!-- row --> */}
    </main>
  );
};

export default GiftDetails;
