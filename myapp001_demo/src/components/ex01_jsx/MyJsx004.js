import React from "react";

const MyJsx004 = () => {
  const name = "css";

  return (
    <div>
      <p>
        {name === "react" ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다.</h1>}
        {/* 자바스크립트 문법이라서 {} 로 묶어줫음 위에줄 근데 같다 할때 등호 세개임*/}
        {/* 자스여도 if문 for문을 지원하지 않아서 사용할수없고 위에처럼 조건절 주거나 map사용 */}
      </p>
      <p>{name === "react" ? <h1>리액트입니다.</h1> : <h1>null</h1>}</p>
      {/* 위의 p태그 부분이랑 같은건데 조건에 해당안하는 부분의 값이 없을때 널로 주면됨 */}
    </div>
  );
};

export default MyJsx004;
