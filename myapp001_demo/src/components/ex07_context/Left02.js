import React from "react";
import Left03 from "./Left03";

//03을 02에서 사용하는거임
//02를 01에서 사용할거임 / 01의 자식이 02임
const Left02 = () => {
  return (
    <div>
      <h1>Left02:</h1>
      <Left03 />
    </div>
  );
}; 

export default Left02;
