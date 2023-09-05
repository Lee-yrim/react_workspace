import React, { useContext, useEffect } from "react";
import Label4 from "./Label4";
import { useDispatch, useSelector } from "react-redux";
import { getAction } from "../reduxs/action";

const Todo4 = () => {
  const todos = useSelector((todos) => todos);
  const dispatch = useDispatch();

  useEffect(() => {
    getAction(dispatch);
  }, []);

  return (
    <>
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
