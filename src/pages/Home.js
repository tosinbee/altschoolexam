import React, { useState } from "react";
import me from "../assets/me.png";

function Loader() {
  return (
    <div className="loader">
      <div></div>
      <div></div>
    </div>
  );
}

function Content() {
  return (
    <div className="content">
      <div className="flex ">
        <h1 className="text-2xl text-black-900">
          Hello &#129306;! My name is Tosin Badmus.
        </h1>
        <div className="flex ml-[34vw] shadow-2xl text-black-900">
          <img src={me} alt="profile icon" className="rounded-md w-16 h-18" />
        </div>
      </div>
      <h2 className="text-3xl my-2 text-black-900">
        MY EXPERIENCE SO FAR THIS SEMESTER
      </h2>
      <p className="text-2xl my-5 leading-loose text-black-900">
        This semester started out rough for me as I struggled to understand
        react. This went on for weeks and I kept telling myself that I would
        never understand it. However, sometime last month, I convinced myself to
        stop thinking about react as something I would never understand. I
        started to watch videos, and tried to build very simple react projects
        on my own. I am also very grategul for my support systems because
        without them, I would have given up a long time ago. Everything is
        starting to make sense now and I am happy that I did not give up on
        myself.
      </p>

      <p className="text-2xl my-5">
        &#128072; Want to see what I built? Check my sidebar.
      </p>
    </div>
  );
}

function Home() {
  const [isLoading, setIsLoading] = useState(true); //default value is set to true

  //set a timeout to simulate an async function (it's basically a false timeout)
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);
  return (
    <>
      <section className="main-container">
        {isLoading ? <Loader /> : <Content />}
      </section>
    </>
  );
}

export default Home;
