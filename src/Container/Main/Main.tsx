import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import TaskFirst from "../../pages/TaskFirst";
import TaskSecond from "../../pages/TaskSecond";

const Main = () => {

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
