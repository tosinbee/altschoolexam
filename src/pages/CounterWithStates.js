import React from "react";
import useStateCounter from "../hooks/useStateCounter";
import me from "../assets/me.png";
import resetlogo from "../assets/resetlogo.svg";
import Button from "../components/Button";

function CounterWithStates() {
  const { value, incrementAction, decrementAction, resetAction } =
    useStateCounter();
  return (
    <>
      <div className="flex mb-10">
        <p className="text-3xl mr-96">Counter</p>
        <div className="flex ml-[34vw] shadow-2xl  ">
          <img src={me} alt="profile icon" className="rounded-md w-16 h-18 " />
        </div>
      </div>

      <div className="Counter">
        <div className="flex  ">
          <div className="flex gap-x-8  ">
            <h1>{value}</h1>
            <Button className=" bg-blue-400" onClick={incrementAction}>
              Increment
            </Button>
            <Button className="bg-primaRed" onClick={decrementAction}>
              Decrement
            </Button>
            <Button
              className="bg-purple-300 text-gray-900 w-20"
              onClick={resetAction}
            >
              <img
                src={resetlogo}
                alt="reset icon"
                className="rounded-md w-3 h-5 pr-1 "
              />
              RESET
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CounterWithStates;
