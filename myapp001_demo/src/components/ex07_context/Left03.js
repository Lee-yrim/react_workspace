import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

//Left03은 Left02에서 사용할거임 3의 부모가 2
const Left03 = () => {
  const { number } = useContext(ThemeContext);
  return (
    <div>
      <h1>Left03:</h1>
      <h1>Number:{number}</h1>
    </div>
  );
};

export default Left03;
// export가 있어야 다른 파일에서 참조가 가능함 여기서는 02
