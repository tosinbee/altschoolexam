import React from "react";
import { NavLink } from "react-router-dom";
import altschoollogo from "../assets/altschoollogo.svg";

// const Menus = [];

const Sidebar = () => {
  const activeLink = "border";
  const normalLink = "";

  return (
    <>
      <div>
        {/* ALTSCHOOL Logo */}

        <div className="hidden justify-center mt-3 md:block">
          <img src={altschoollogo} alt="logout icon" />

          {/* Links */}
          {/* These are the links on my side bar */}
          <div className="w-100 h-full bg-black text-white text-xl grid grid-row-8 my-20">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="w-full h-full rounded py-2 px-4 centered">Home</p>
            </NavLink>
            <NavLink
              to="/counter"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="w-full h-full rounded py-2 px-4 centered">
                Counter
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
