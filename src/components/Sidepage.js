import React from "react";
import { Counter, Home, NotFound, CounterWithStates } from "../pages";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import FallbackComponent from "./FallbackComponent";

//THIS COMPONENT CONTAINS ALL THE ROUTES NEEDED FOR THE PROJECT
function Sidepage() {
  const errorHandler = (error, errorInfo) => {
    console.log("Loading error", error, errorInfo);
  };
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />

        <Route
          path="/counter"
          element={
            <ErrorBoundary
              FallbackComponent={FallbackComponent}
              onError={errorHandler}
            >
              <Counter />
            </ErrorBoundary>
          }
        />
        <Route
          path="/counterusestate"
          element={
            <ErrorBoundary
              FallbackComponent={FallbackComponent}
              onError={errorHandler}
            >
              <CounterWithStates />
            </ErrorBoundary>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Sidepage;
