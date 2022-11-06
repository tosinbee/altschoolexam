import React from "react";
import useStateCounter from "../hooks/useStateCounter";
import me from "../assets/me.png";
import resetlogo from "../assets/resetlogo.svg";
import Button from "../components/Button";
import { Helmet } from "react-helmet-async";

function CounterWithStates() {
  const { value, incrementAction, decrementAction, resetAction } =
    useStateCounter();
  return (
    <>
      <Helmet>
        <title>Counter with UseState</title>
        <meta
          name="description"
          content="This page contains a Counter made using customHooks in React"
        />
        <link rel="canonical" href="/counterusestate" />
      </Helmet>

      <div className="mb-20 mt-10 mx-20">
        <h1 className="text-3xl mr-86">Counter with UseState</h1>
      </div>
      <div className="Counter">
        <div className="flex  ">
          <div className="flex gap-x-8  ">
            <h2>{value}</h2>
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
                width="69"
                height="49"
                loading="eager"
                title="button-icon"
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
