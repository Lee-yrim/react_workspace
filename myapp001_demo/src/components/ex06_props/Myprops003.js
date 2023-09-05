import React from "react";

//3은 name같은 이름을 통해서가 아니라 props를 통해서 받는거
//5줄 괄호안에 props라고해놓고 app.js가서 정의해주면 2랑 똑같이 출력
// const Myprops003 = (props) => {
//   return (
//     <div>
//       <p>
//         고객이름 :{props.name} 나이:{props.age} 지역:{props.loc}
//       </p>
//     </div>
//   );
// };

// 위랑 같은건데 조금 더 편한방식
//기본값을 부여해주는 방식 / app.js에 나이에대한 정보가 빠져있으면 기본값인 20으로 출력됨
//구글정리 0904부분 사진(상속)
const Myprops003 = ({ name = "아무개", age = "20", loc = "경기" }) => {
  return (
    <div>
      <p>
        고객이름 :{name} 나이:{age} 지역:{loc}
      </p>
    </div>
  );
};

export default Myprops003;
