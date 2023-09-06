import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components1/Layout";
import Home from "./components1/Home";
import About from "./components1/About";
import Dashboard from "./components1/Dashboard";
import NoMatch from "./components1/NoMatch";

const App1 = () => {
  return (
    <div>
      <h1>Basic Example</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* home.js 등록시켜준거임 */}
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
          {/* 별표로 해두면 여기서 path로 지정되지 않은 것은 다 이리로 넘어옴 app1에서  */}
        </Route>
      </Routes>
    </div>
  );
};

export default App1;
