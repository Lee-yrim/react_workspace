import React, { useState } from "react";

// 001이랑 비슷한데 콘솔말고 화면에 있는 숫자도 증가되게하기

const MyUseState002 = () => {
  //const [상태, 상태변경함수]=useState(초기값)
  //setter 이용하는거임 / 이렇게 해놓고 아래에서 사용하면 됨
  const [cnt, setCnt] = useState(0);

  const handleClick = () => {
    setCnt(cnt + 1);
    console.log(`cnt:${cnt}`);
  };
  return (
    <div>
      <p>
        <span>{cnt}</span>
        <button onClick={handleClick}>CNT UPDATE</button>
      </p>
    </div>
  );
};

export default MyUseState002;
