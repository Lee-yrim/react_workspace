import React from "react";
import Label1 from "./Label1";

const Todo1 = (props) => {
  //component로 함수를 사용할때는 함수가 대문자 여야함!!!!!!!!!!!!!!!!
  const { todos, updateTodo, deleteTodo } = props;
  return (
    <>
      {todos.map((todo) => {
        return (
          <div className="todo" key={todo.id}>
            <Label1 todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          </div>
        );
      })}
    </>
  );
};

export default Todo1;
