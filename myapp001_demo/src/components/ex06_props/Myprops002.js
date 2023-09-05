import React from "react";

// 1은 props한개 2는 props 여러개
const Myprops002 = ({ name, age, loc }) => {
  return (
    <div>
      <p>
        고객이름 :{name} 나이:{age} 지역:{loc}
      </p>
    </div>
  );
};

export default Myprops002;
