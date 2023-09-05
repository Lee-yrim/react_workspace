import React, { useContext, useEffect } from "react";
import Label4 from "./Label4";
import { useDispatch, useSelector } from "react-redux";
import { getAction } from "../reduxs/action";

const Todo4 = () => {
  return (
    <>
      {todos.map((todo) => {
        const todos = useSelector((todos) => todos);
        const dispatch = useDispatch();

        useEffect(() => {
          getAction(dispatch);
        }, []);

        return (
          <div className="todo" key={todo.id}>
            <Label4 todo={todo} />
          </div>
        );
      })}
    </>
  );
};

export default Todo4;
