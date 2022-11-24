import React from "react";

const CounterButton = () => {
  const [count, setCount] = React.useState<number>(0);
  const clickCount = () => setCount((prevState) => prevState + 1);

  return (
    <button
      onClick={clickCount}
      style={{
        width: "100px",
        backgroundColor: "blueviolet",
        color: "#fff",
        border: "1px solid blueviolet",
        borderRadius: "5px",
        padding: "10px",
        textAlign: "center",
        fontSize: "12px",
        cursor: "pointer"
      }}
    >
      Count ({count}){" "}
    </button>
  );
};

export default CounterButton;
