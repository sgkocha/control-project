import React from "react";
import { Routes, Route } from "react-router-dom";
import CounterButton from "../../components/CounterButton";
import ProductList from "../../components/Product/ProductList";
import About from "../../pages/About";
import TaskFirst from "../../pages/TaskFirst";
import TaskSecond from "../../pages/TaskSecond";

const Main = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <main>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<TaskFirst />} />
          <Route path="/task2" element={<TaskSecond />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
