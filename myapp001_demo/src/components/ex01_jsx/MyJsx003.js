import React from "react";
import "./MyJsx003.css";

const MyJsx003 = () => {
  //여기는 js 문법 쓰는 자리
  const numX = 3;
  const numY = 5;

  return (
    //return 안에는 jsx문법
    <>
      {/* return 안에 js문법 쓰고싶으면 아래처럼 {}로 묶고 백틱을 써서 해줌 */}
      <div>{`${numX}+${numY}=${numX + numY}`}</div>
      <div className="line">Line Test</div>
    </>
  );
};

export default MyJsx003;
