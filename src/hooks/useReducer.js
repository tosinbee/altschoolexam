import { useReducer } from "react";
import { useErrorHandler } from "react-error-boundary";

function useCounter() {
  const actions = {
    increment: "increment",
    decrement: "decrement",
    reset: "reset",
    setValue: "setValue",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, count: 0 };
      case "setValue":
        return { ...state, count: state.count / 2 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const handleError = useErrorHandler();
  const MAX_COUNT_ALLOWED = 60;
  const MAX_COUNT_DECREMENT_ALLOWED = 40;

  const increment = () => {
    try {
      if (state.count >= MAX_COUNT_ALLOWED) {
        throw new Error("Count Limit exceeded");
      } else {
        dispatch({ type: actions.increment });
      }
    } catch (e) {
      handleError(e);
    }
  };
  const decrement = () => {
    try {
      if (state.count >= MAX_COUNT_DECREMENT_ALLOWED) {
        throw new Error("Count Limit exceeded");
      } else {
        dispatch({ type: actions.decrement });
      }
    } catch (e) {
      handleError(e);
    }
  };

  const reset = () => {
    dispatch({ type: actions.reset });
  };

  const setValue = () => {
    dispatch({ type: actions.setValue });
  };

  return { state, increment, decrement, reset, setValue };
}

export default useCounter;
