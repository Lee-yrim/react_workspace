import React, { useContext, useEffect } from "react";
import Label4 from "./Label4";
import { useDispatch, useSelector } from "react-redux";
import { getAction } from "../toolkit/todo_action";
// import { getAction } from "../reduxs/action";

//todo는 라벨에 정의돼잇고 todos는 투두에 정의돼있음
const Todo4 = () => {
  // const todos = useSelector((state) => state);
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();

  useEffect(() => {
    getAction(dispatch);
    // 여기서 겟액션하면 액션.js 가 실행되면서 모든 이벤트활동은 액션에서 실행됨
  }, []);

  return (
    <>
      {console.log("todos", todos)}
      {todos
        ? todos.map((todo) => {
            return (
              <div className="todo" key={todo.id}>
                <Label4 todo={todo} />
              </div>
            );
          })
        : null}
    </>
  );
};

export default Todo4;
