import React, { useContext } from "react";
import Left02 from "./Left02";
import { UserContext } from "./contexts/UserContext";

const Left01 = () => {
  const { name, onHandleName } = useContext(UserContext);
  //상위인 MyuseContext01에서 <UserContext.Provider value={{ name, setName, onHandleName }}> 이렇게 정의한거 갖다 쓰는 거인 듯
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
