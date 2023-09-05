import React from "react";
import Label2 from "./Label2";

const Todo2 = (props) => {
  //component로 함수를 사용할때는 함수가 대문자 여야함!!!!!!!!!!!!!!!!
  const { todos, updateTodo, deleteTodo } = props;
  return (
    <>
      {todos.map((todo) => {
        return (
          <div className="todo" key={todo.id}>
            <Label2 todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          </div>
        );
      })}
    </>
  );
};

export default Todo2;
