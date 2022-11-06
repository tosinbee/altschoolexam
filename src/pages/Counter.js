import React from "react";
import me from "../assets/me.png";
import resetlogo from "../assets/resetlogo.svg";
import useReducer from "../hooks/useReducer";
import Button from "../components/Button";
import { Helmet } from "react-helmet-async";

function Counter() {
  const { state, increment, decrement, reset, setValue } = useReducer();

  return (
    <>
      <Helmet>
        <title>Counter with UseReducer</title>
        <meta
          name="description"
          content="This page contains a Counter made using customHooks in React"
        />
        <link rel="canonical" href="/counter" />
      </Helmet>

      <div className="flex mb-10">
        <h1 className="text-3xl mr-86">Counter with UseReducer</h1>
        <div className="flex ml-[34vw] shadow-2xl  ">
          <img
            src={me}
            alt="profile icon"
            className="rounded-md w-16 h-18 "
            width="69"
            height="49"
            loading="eager"
            title="profile-picture"
          />
        </div>
      </div>
      <div className="Counter">
        <div className="text-4xl mb-20">count: {state.count}</div>
        <div className="flex gap-x-8 md:grid-rows">
          <Button className=" bg-blue-400" onClick={increment}>
            Increment
          </Button>
          <Button className="bg-primaRed" onClick={decrement}>
            Decrement
          </Button>
          <Button className="bg-purple-300 text-gray-900 w-20" onClick={reset}>
            <img
              src={resetlogo}
              alt="reset icon"
              className="rounded-md w-3 h-5 pr-1 md:grid "
              width="69"
              height="49"
              loading="eager"
              title="button-icon"
            />
            RESET
          </Button>
          <Button className="bg-yellow-300 text-gray-900 " onClick={setValue}>
            Divide by 2
          </Button>
        </div>
      </div>
    </>
  );
}

export default Counter;
