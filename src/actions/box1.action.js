import {
  BOX1_ACTION_ADD,
  BOX1_ACTION_CLR,
  BOX1_ACTION_REM,
} from "../constants";

export const box1ActionToAdd = () => ({
  type: BOX1_ACTION_ADD,
});

export const box1Add = () => {
  return (dispatch) => {
    dispatch(box1ActionToAdd());
  };
};

export const box1ActionToRem = () => ({
  type: BOX1_ACTION_REM,
});

export const box1Rem = () => {
  return (dispatch) => {
    dispatch(box1ActionToRem());
  };
};

export const box1ActionToClr = (payload) => ({
  type: BOX1_ACTION_CLR,
  payload,
});

export const box1Clr = (payload) => {
  return (dispatch) => {
    dispatch(box1ActionToClr(payload));
  };
};
