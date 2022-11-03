import React from "react";

const src = "https://www.youtube.com/embed/C_zoM3utea8?autoplay=1&mute=1";

const Video = () => {
  return (
    <>
      <div className="flex mb-10">
        <iframe
          className="rounded-md align-center mx-56 video "
          width="560"
          height="315"
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; 
          clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};
export default Video;
