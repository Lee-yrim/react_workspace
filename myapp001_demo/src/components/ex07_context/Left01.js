import React, { useContext } from "react";
import Left02 from "./Left02";
import { UserContext } from "./contexts/UserContext";

const Left01 = () => {
  const { name, onHandleName } = useContext(UserContext);
  return (
    <div>
      <h1>Left01:</h1>
      <h1>Name:{name}</h1>
      <button onClick={onHandleName}>Nameclick</button>

      <Left02 />
    </div>
  );
};

export default Left01;
