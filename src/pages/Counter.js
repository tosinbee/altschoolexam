import React from "react";
import me from "../assets/me.png";
import resetlogo from "../assets/resetlogo.svg";
import useCounter from "../hooks/useCounter";
import Button from "../components/Button";

function Counter() {
  const { state, increment, decrement, reset, setValue } = useCounter();

  return (
    <>
      <div className="flex mb-10">
        <p className="text-3xl mr-96">Counter</p>
        <div className="flex ml-[34vw] shadow-2xl  ">
          <img src={me} alt="profile icon" className="rounded-md w-16 h-18 " />
        </div>
      </div>

      <div className="Counter">
        <div className="text-4xl mb-20">count: {state.count}</div>
        <div className="flex  ">
          <div className="flex gap-x-8  ">
            <Button className=" bg-blue-400" onClick={increment}>
              Increment
            </Button>
            <Button className="bg-primaRed" onClick={decrement}>
              Decrement
            </Button>
            <Button
              className="bg-purple-300 text-gray-900 w-20"
              onClick={reset}
            >
              <img
                src={resetlogo}
                alt="reset icon"
                className="rounded-md w-3 h-5 pr-1 "
              />
              RESET
            </Button>
            <Button className="bg-yellow-300 text-gray-900" onClick={setValue}>
              Divide by 2
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
