import {
  INCREMENT,
  DECREMENT,
  INCREMENTTWO,
  RESET,
  CLEARCOUNTER
} from "./actionsTypes";

export function incrementAction() {
  return {
    type: INCREMENT
  };
}

export function decrementAction() {
  return {
    type: DECREMENT
  };
}

export function incrementTwoAction() {
  return {
    type: INCREMENTTWO
  };
}

export function reset() {
  return {
    type: RESET
  };
}

export function clearCounter() {
  return {
    type: CLEARCOUNTER
  };
}
