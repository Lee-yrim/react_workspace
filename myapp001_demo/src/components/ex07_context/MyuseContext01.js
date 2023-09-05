import React, { useState } from "react";
import "./MyuseContext01.css"; //확장자 필요
import { ThemeContext } from "./contexts/ThemeContext";
import Left01 from "./Left01";
import Right01 from "./Right01";
import { UserContext } from "./contexts/UserContext";

//MyuseContext01는 left01과 right01의 부모 최최최종 부모인셈이지
//03 -> 02 -> 01 -> MyuseContext01 이런느낌
// 페이지 결과물 구글사진
// 최상위 부모에 잇는 값을 자식들이 참조할때 최하위에서 플러스를 해주면 최하위의 상위 또 그 상위 이렇게 자동으로 참조되는거라서 상위들에서도 저절로 +1씩 됨
//여기서 최상위는 지금 이 파일인데 이 파일을 레프트에서도 참조를 하잖아 그러니까 롸이트의 최하위에서 숫자를 증가시켜주면 쫙쫙 이동해서 레프트에서도 숫자가 증가됨

// 이름 바꾸는 것도 레프트01에서 영향을 주면 최상위한테 영향이 오고 그 최상위를 참조하고잇는 롸이트에도 영향이 가는거임
//최상위를 MyuseContext라고 두고 주석써놧지만 따지고 보면 최최상위는 App.js이다.

//props 이용해서 1이 2에게 2가 3에게 이렇게 해도되지만 불푠해서 Context이용해서 할수있도록 제공되고있음
const MyuseContext01 = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("홍길동");

  const onHandleIncrease = () => {
    setNumber(number + 1);
    // 1씩 증가해주는 함수 정의
  };

  const onHandleName = () => {
    setName(name === "홍길동" ? "여진구" : "홍길동");
    //홍길동이면 여진구로 홍길동이 아니면 홍길동으로 바꿔주는 함수
  };

  return (
    <div id="page">
      <h1>page</h1>
      <div className="grid">
        <UserContext.Provider value={{ name, setName, onHandleName }}>
          <ThemeContext.Provider value={{ number, setNumber, onHandleIncrease }}>
            {/* value값을 저렇게 줘야 위에서 정의해준 것을 사용가능함 */}
            <Left01 />
            {/* left01을 정의해준거임 d이렇게하면 01의 하위인 02 03도 가능함*/}
            <Right01 />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default MyuseContext01;
