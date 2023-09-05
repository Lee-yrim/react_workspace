import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Label3 = (props) => {
  //component로 함수를 사용할때는 함수가 대문자 여야함!!!!!!!!!!!!!!!!
  const { todo } = props;
  const { updateTodo, deleteTodo } = useContext(TodoContext);
  //원래 세개 같이 프랍스로 돼잇던거 두개는 따로 뺏음 왱? 투두3에서 기존에 잇던 두개 지웟거든 그거랑 연관잇는거같은데ㅎ
  return (
    <>
      <h3>
        <label className={todo.completed === 1 ? "completed" : null} onClick={() => updateTodo(todo.id)}>
          {todo.todoname}
        </label>
        {/* 함수를 호출할때 넘겨주는값이 잇을때는 온클릭에 ={()=>updateTodo(todo.id)}>이렇게 표현해줘야함 */}
        <label onClick={() => deleteTodo(todo.id)}>&nbsp;&nbsp;삭제</label>
      </h3>
    </>
  );
};

export default Label3;
