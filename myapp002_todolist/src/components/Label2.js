import React from "react";

const Label2 = (props) => {
  //component로 함수를 사용할때는 함수가 대문자 여야함!!!!!!!!!!!!!!!!
  const { todo, updateTodo, deleteTodo } = props;
  return (
    <>
      <label className={todo.completed === 1 ? "completed" : null} onClick={() => updateTodo(todo.id)}>
        {todo.todoname}
      </label>
      {/* 함수를 호출할때 넘겨주는값이 잇을때는 온클릭에 ={()=>updateTodo(todo.id)}>이렇게 표현해줘야함 */}
      <label onClick={() => deleteTodo(todo.id)}>&nbsp;&nbsp;삭제</label>
    </>
  );
};

export default Label2;
