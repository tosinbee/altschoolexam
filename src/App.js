import React from "react";
import MainPage from "./components/MainPage";
// import { ErrorBoundary } from "react-error-boundary";
// import FallbackComponent from "../components/FallbackComponent";

function App() {
  // const errorHandler = (error, errorInfo) => {
  //   console.log("Loading error", error, errorInfo);
  // };
  return (
    <div>
      {/* <ErrorBoundary
        FallbackComponent={FallbackComponent}
        onError={errorHandler}
      > */}
      <MainPage />
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
