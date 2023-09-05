import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Right03 from "./Right03";
import { UserContext } from "./contexts/UserContext";

const Right02 = () => {
  const { number } = useContext(ThemeContext);
  const { name } = useContext(UserContext);

  return (
    <div>
      <h1>Right02:</h1>
      <h1>Number:{number}</h1>
      <h1>Name:{name}</h1>
      <Right03 />
    </div>
  );
};

export default Right02;
