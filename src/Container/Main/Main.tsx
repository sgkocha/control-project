import React from "react";
import CounterButton from "../../components/CounterButton";

const Main = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <main>
      <div className="wrapper">
        <h2 className="title">Task 1. Counter buttons</h2>
        <div className="buttons-list flexbox">
          {arr.map((index) => (
            <CounterButton key={index}/>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
