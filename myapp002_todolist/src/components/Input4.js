import React, { useRef, useState } from "react";
import { insertAction } from "../reduxs/action";

const Input4 = () => {
  const inputRef = useRef("");
  const [input, setInput] = useState("");

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = () => {
    insertAction(input);
  };

  return (
    <>
      <form onSubmit={insertTodo}>
        <input type="text" required={true} ref={inputRef} value={input} onChange={handleChangeText} />
        <input type="submit" value="Create" />
      </form>
    </>
  );
};

export default Input4;
