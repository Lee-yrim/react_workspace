import React from "react";
/*
 props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며, 
 컴포넌트 자식은 해당 props를 읽기 전용으로만 사용할 수 있다.
 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다.
 넘겨주는 거를 props라고함
*/
const Myprops001 = ({ name }) => {
  return (
    <div>
      <h3>props:properties</h3>
      <p>Hello, {name} </p>
      {/* App.js에서 이름 지정해주면 웹에 그 이름이 나옴 */}
      {/* <Myprops001 name={"홍길동"} /> 이렇게 */}
    </div>
  );
};

export default Myprops001;
