import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { DECREMENT, DECREMENT_BY, INCREMENT, INCREMENT_BY, RESET_COUNTER } from "./actions";
import { increaseCount, decreaseCount, resetCount } from "./counterSlice";

const Counter = () => {
  const [num, setNum] = useState(0);
  const [interval, setInt] = useState(null);
  // const count = useSelector((state) => state.counter.count);
  const count = useSelector((state) => state.counterToolkit.count);
  const dispatch = useDispatch();

  const handleDecreaseCounter = () => {
    // dispatch({ type: DECREMENT.type });
    dispatch(decreaseCount(1));
  }

  const handleIncreaseCounter = () => {
    // dispatch({ type: INCREMENT.type });
    dispatch(increaseCount(1));
  }

  const handleDecreaseByCounter = () => {
    // dispatch({ type: DECREMENT_BY.type, payload: num });
    dispatch(decreaseCount(num));
  }

  const handleIncreaseByCounter = () => {
    // dispatch({ type: INCREMENT_BY.type, payload: num });
    dispatch(increaseCount(num));
  }

  const handleRun = () => {
    setInt(setInterval(() => {
      // dispatch({ type: INCREMENT.type });
      dispatch(increaseCount(num));
    }, 100));
  }

  const handleStop = () => {
    clearInterval(interval);
  }

  const resetCounter = () => {
    // dispatch({ type: RESET_COUNTER.type });
    dispatch(resetCount());
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px"
      }}
    >
      <div style={{ display: "flex" }}>
        <button onClick={handleDecreaseCounter}>-</button>
        <div style={{ margin: "0 5px" }}>Count: {count}</div>
        <button onClick={handleIncreaseCounter}>+</button>
      </div>
      <div style={{ margin: "10px 0" }}>
        <button onClick={handleDecreaseByCounter}>- by</button>
        <input
          type="text"
          value={num}
          onChange={(event) => setNum(Number(event.target.value))}
          style={{ margin: "0 5px" }}
        />
        <button onClick={handleIncreaseByCounter}>+ by</button>
      </div>
      <div>
        <button onClick={handleRun}>Run</button>
        <button onClick={handleStop} style={{ margin: "0 5px" }}>Stop</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
