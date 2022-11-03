import React from "react";
import Sidebar from "./Sidebar";
import Sidepage from "./Sidepage";

function MainPage() {
  return (
    <>
      <section className="flex">
        {/* sidebar */}
        <div className="bg-black w-[20vw] h-screen p-10">
          <Sidebar />
        </div>
        {/* pageview */}
        <div className="p-10 bg-brightGrey h-screen flex-1 h-screen">
          <Sidepage />
        </div>
      </section>
    </>
  );
}

export default MainPage;
