import {
  BOX1_ACTION_ADD,
  BOX1_ACTION_CLR,
  BOX1_ACTION_REM,
} from "../constants";

const initialState = {
  count1: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case BOX1_ACTION_ADD:
      return { ...state, count1: state.count1 + 1 };
    case BOX1_ACTION_REM:
      return { ...state, count1: state.count1 - 1 };
    case BOX1_ACTION_CLR:
      return { ...state, count1: payload };

    default:
      return state;
  }
};
