import React from "react";
import { useSelector } from "react-redux";

const Progress = () => {
  // const count = useSelector((state) => state.counter.count);
  const count = useSelector((state) => state.counterToolkit.count);
  const progress = Array(count).fill(null);

  return (
    <div style={{
      display: "flex",
      padding: "2px",
      height: "20px",
      border: "1px solid black",
      borderRadius: "3px",
    }}>
      {progress.map((_, index) => (
        <div
          key={index}
          style={{
            height: "20px",
            width: "1%",
            backgroundColor: "lightgreen"
          }}
        />
      ))}
    </div>
  );
};

export default Progress;
