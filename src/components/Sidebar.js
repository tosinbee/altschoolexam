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

        <div className="overflow-hidden justify-center mt-3 ">
          <img
            src={altschoollogo}
            alt="altschool icon"
            width="69"
            height="49"
            loading="eager"
            title="altschool-icon"
          />

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

            <NavLink
              to="/counterusestate"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="w-full h-full rounded py-2 px-4 centered">
                Counter with useState
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
