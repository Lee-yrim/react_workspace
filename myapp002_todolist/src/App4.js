import "./App.css";
import { useEffect, useRef, useState } from "react";
import Input4 from "./components/Input4";
import Todo4 from "./components/Todo4";

import axios from "axios";
import { InputContext } from "./contexts/InputContext";
import { TodoContext } from "./contexts/TodoContext";
import { store } from "./reduxs/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { getAction } from "./reduxs/action";

//App4 : redux 설치햇고 / 뭐하는걸까...?
function App4() {
  const wrap = {
    width: "500px",
    border: "2px solid black",
    margin: "10px auto",
  };

  return (
    <div className="App" style={wrap}>
      <h1>TODO LIST</h1>

      <Provider store={store}>
        <Input4 />
        <Todo4 />
      </Provider>
    </div>
  );
}

export default App4;
