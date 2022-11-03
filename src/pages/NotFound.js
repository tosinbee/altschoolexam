import { NavLink } from "react-router-dom";
import Video from "./Video";

const NotFound = () => {
  return (
    <div className="text-center">
      <Video />
      <h2 className="text-9xl">404</h2>
      <p className="text-5xl">
        Shey you dey whine me ni?! This page does not exist my G &#128532;
      </p>

      <NavLink to="/">
        <p className="w-full h-full rounded py-2 px-4 centered home mx-96">
          Home
        </p>
      </NavLink>
    </div>
  );
};

export default NotFound;
