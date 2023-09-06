import React, { useContext } from "react";
import { deleteAction, updateAction, updateActon } from "../reduxs/action";

const Label4 = (props) => {
  const { todo } = props;

  const deleteTodo = (id) => {
    //id가 파라미터 값임 여기서 파라미터가 있으면 아래에서 온클릭이벤트의 형태가 조금 다름
    deleteAction(todo.id); //5줄에서의 투두값을 받아오는거임
    //딜리트 액션 actionjs에서 정의하러감
  };

  const updateTodo = (id, completed) => {
    updateAction(id, completed);
  };

  return (
    <>
      <h3>
        <label className={todo.completed === 1 ? "completed" : null} onClick={() => updateTodo(todo.id, todo.completed)}>
          {todo.todoname}
        </label>
        {/* 함수를 호출할때 넘겨주는값이 잇을때는 온클릭에 ={()=>updateTodo(todo.id)}>이렇게 표현해줘야함 */}
        <label onClick={() => deleteTodo(todo.id)}>&nbsp;&nbsp;삭제</label>
      </h3>
    </>
  );
};

export default Label4;
