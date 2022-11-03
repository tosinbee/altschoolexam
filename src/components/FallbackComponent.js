import React from "react";
import Button from "./Button";
import resetlogo from "../assets/resetlogo.svg";

function FallbackComponent({ resetErrorBoundary }) {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-9xl mb-30 text-deepPurple">Oh dear! &#128532;</h2>
        <p className="text-7xl mb-36 text-deepPurple">
          Something has gone wrong.
        </p>
        {/* This button helps with error recovery when aan error is displayed */}
        <Button
          className="bg-purple-300 text-gray-900 h-20 w-40 px-7"
          onClick={resetErrorBoundary}
        >
          <img
            src={resetlogo}
            alt="reset icon"
            className="rounded-md w-8 h-8 pr-1 text-xl"
          />
          TRY AGAIN
        </Button>
      </div>
    </div>
  );
}

export default FallbackComponent;
