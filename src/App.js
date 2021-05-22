import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Box1 from "./components/box1";

import * as appActions from "./actions/index.action";

export default function App() {
  // const [count, setCount] = useState(0);
  const appReducer = useSelector(({ appReducer }) => appReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>CodeMobiles : {appReducer.count}</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={() => dispatch(appActions.add())}>ADD</button>
        <button onClick={() => dispatch(appActions.remove())}>REM</button>
        <button onClick={() => dispatch(appActions.clear(0))}>CLR</button>
      </div>
      <Box1 />
    </div>
  );
}
