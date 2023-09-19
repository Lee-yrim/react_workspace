import "./App.css";
import { useEffect, useRef, useState } from "react";
import Input3 from "./components/Input3";
import Todo3 from "./components/Todo3";

import axios from "axios";
import { InputContext } from "./contexts/InputContext";
import { TodoContext } from "./contexts/TodoContext";

//App3 : contexts폴더랑 그 내부에 잇는것들 추가 / 다른 3들이랑같이
function App3() {
  const inputRef = useRef("");
  const wrap = {
    width: "500px",
    border: "2px solid black",
    margin: "10px auto",
  };

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const updateTodo = async (id) => {
    let completed = todos.filter((todo) => todo.id === id)[0].completed;
    await axios
      .put(`/todo/${id}/${completed}`)
      .then((response) => {
        console.log(response);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = async (e) => {
    e.preventDefault();
    await axios
      .post("/todo", { todoname: input })
      .then((response) => {
        console.log(response.data);
        getTodos();
        setInput("");
      })
      .catch((error) => {
        console.log(error);
      });

    setInput("");
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(`/todo/${id}`)
      .then((response) => {
        console.log(response);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const getTodos = async () => {
    await axios
      .get("/todo/all")
      .then((response) => {
        console.log(response);
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App" style={wrap}>
      <h1>TODO LIST</h1>
      <InputContext.Provider value={{ insertTodo, input, handleChangeText, inputRef }}>
        {/* <Input3 insertTodo={insertTodo} input={input} handleChangeText={handleChangeText} inputRef={inputRef} /> */}
        <Input3 />
      </InputContext.Provider>

      <TodoContext.Provider value={{ todos, updateTodo, deleteTodo }}>
        <Todo3 />
      </TodoContext.Provider>

      {/* <Todo3 todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} /> */}
    </div>
  );
}

export default App3;
