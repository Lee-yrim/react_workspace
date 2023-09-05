import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Label4 = (props) => {
  const { todo } = props;

  return (
    <>
      <h3>
        <label className={todo.completed === 1 ? "completed" : null}>{todo.todoname}</label>
        {/* 함수를 호출할때 넘겨주는값이 잇을때는 온클릭에 ={()=>updateTodo(todo.id)}>이렇게 표현해줘야함 */}
        <label>&nbsp;&nbsp;삭제</label>
      </h3>
    </>
  );
};

export default Label4;
