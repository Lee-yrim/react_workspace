import React, { useEffect, useRef } from "react";

const MyUseRef002 = () => {
  const nameRef = useRef("");

  const handleBtn = () => {
    console.log(document.querySelector("#data").value);
    // 출력 후 input창 초기화
    document.querySelector("#data").value = "";
  };

  // 실행했을 때 input창에 focus가 맞춰짐
  // 모든 렌더링 작업이 끝난 후 마지막에 useEffect가 수행됨
  useEffect(() => {
    nameRef.current.focus();
  });

  return (
    <div>
      <input type="text" placeholder="이름입력" id="data" ref={nameRef} />
      <button onClick={handleBtn}>Click</button>
    </div>
  );
};

export default MyUseRef002;
