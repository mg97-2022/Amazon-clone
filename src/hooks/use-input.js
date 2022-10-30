import { useState } from "react";

function useInput(inputValidate) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isChanging, setIsChanging] = useState(false)

  const validInput = inputValidate(enteredValue);
  const hasError = !validInput && isTouched;

  const inputBlurHandler = () => {
    setIsTouched(true);
    setIsChanging(false)
  };
  const inputChangeHandler = (value) => {
    setEnteredValue(value);
    setIsChanging(true)
  };
  const resetInput = () => {
    setIsChanging(false)
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    validInput,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
    isChanging,
  };
}

export default useInput;
