import * as React from "react";
import { useErrorHandler } from "react-error-boundary";

function CounterWithStates(initialValue) {
  const handleError = useErrorHandler();
  const MAX_COUNT_ALLOWED = 50;
  const MAX_COUNT_DECREMENT_ALLOWED = 40;

  let [value, setValue] = React.useState(initialValue || 0);

  const incrementAction = (e) => {
    try {
      if (value === MAX_COUNT_ALLOWED) {
        throw new Error("Count Limit exceeded");
      } else {
        setValue(value + 1);
      }
    } catch (e) {
      handleError(e);
    }
  };

  const decrementAction = () => {
    try {
      if (value >= MAX_COUNT_DECREMENT_ALLOWED) {
        throw new Error("Count Limit exceeded");
      } else {
        setValue(value - 1);
      }
    } catch (e) {
      handleError(e);
    }
  };

  const resetAction = () => {
    setValue(0);
  };

  return { value, incrementAction, decrementAction, resetAction, setValue };
}

export default CounterWithStates;
