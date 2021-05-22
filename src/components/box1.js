import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as box1Action from "../actions/box1.action";

export default function Box1() {
  const box1Reducer = useSelector(({ box1Reducer }) => box1Reducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>box1: {box1Reducer.count1}</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={() => dispatch(box1Action.box1Add())}>ADD</button>
        <button onClick={() => dispatch(box1Action.box1Rem())}>REM</button>
        <button onClick={() => dispatch(box1Action.box1Clr(0))}>CLR</button>
      </div>
    </div>
  );
}
