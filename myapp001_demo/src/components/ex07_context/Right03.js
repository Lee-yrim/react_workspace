import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

// 대괄호는 useState(상태)를 선언할때 사용하고
// 중괄호는 문법임 (보통 값을받을때 사용)
const Right03 = () => {
  const { number, onHandleIncrease } = useContext(ThemeContext);
  return (
    <div>
      <h1>Right03:</h1>
      <h1>Number:{number}</h1>
      <input type="button" value={"+"} onClick={onHandleIncrease} />
    </div>
  );
};

export default Right03;
