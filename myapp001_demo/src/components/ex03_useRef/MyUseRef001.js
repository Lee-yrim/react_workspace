import React, { useRef, useState } from "react";
/*
 state : state 변경  -> 리렌더링 발생함 -> state 초기화 안됨
 ref : ref 변경-> 리렌더링 발생안됨 -> ref 초기화 안됨
 variable : variable -> 리렌더링 발생안됨 -> variable 초기화 됨


 리렌더링 발생(컴포넌트 업데이트)
 1. state가 바뀔 때
 2. props가 바뀔 때
 3. 부모 컴포넌트가 리렌더링될 때
 4. foreUpdate( )로 강제로 렌더링을 트리거할때 

 useRef( )
 1. 상태정보
 2. DOM 접근


 DOM을 꼭 사용해야 하는 경우
 1. 특정 input에 포커스 주기
 2. 스크롤 박스 조작하기
 3. Canvas 요소에 그림 그리기 등
*/
const MyUseRef001 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countLeft = 0;

  //console.log(countRef);

  const upCountState = () => {
    setCount(count + 1);
  };
  const upCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("ref: ", countRef.current);
  };
  const upCountLeft = () => {
    countLeft = countLeft + 1;
    console.log("variable: ", countLeft);
  };

  return (
    <div>
      <p>State : {count}</p>
      {/* <p>Ref : {countRef}</p> 에서 오류 발생.*/}
      {/* console.log(countRef);로 확인하면 {current: 0} 출력됨 */}
      <p>Ref : {countRef.current}</p>
      <p>Variable : {countLeft}</p>

      <button onClick={upCountState}>State</button>
      <button onClick={upCountRef}>Ref</button>
      <button onClick={upCountLeft}>Variable</button>
    </div>
  );
};

export default MyUseRef001;
