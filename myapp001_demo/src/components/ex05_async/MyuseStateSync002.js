import React, { useState } from "react";

const MyuseStateSync002 = () => {
  const [number, setNumber] = useState(0);

  const handleUpNumber = () => {
    // state의 값을 순차적으로 변경할 때 콜백함수를 사용한다.
    setNumber((number) => number + 3);
    console.log(number);

    setNumber((number) => number + 2);
    console.log(number);

    setNumber((number) => number + 1);
    console.log(number);
  };

  const handleDownNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={handleUpNumber}>UP</button>
      <button onClick={handleDownNumber}>DOWN</button>
    </div>
  );
};

export default MyuseStateSync002;
