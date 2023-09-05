import React, { useState } from "react";

// 앞이랑 차이는 배열을 이용한 거임
// input박스에 값을 넣어주면 하나의 문자를 입력해줄때마다 콘솔에서 업뎃됨
// 댓글등을 최신순으로 출력해주고자 할때 사용할수 있을듯
// 주소가 항상 http://localhost:3000/ 이건데 이거 걍 들어가면 되는지는 잘 모르겟음
const MyUseState003 = () => {
  const [names, setNames] = useState(["고수", "여진구", "송중기"]);
  const [input, setInput] = useState("");
  // 인풋에 홍길동을 쓰면 결과적으로 input에 홍길동이 저장되는거임

  //현재이벤트가 발생한 객체값을 받기위한 변수 e
  const handleChangeNames = (e) => {
    setInput(e.target.value); //인풋에 변화가 생기면 event에 추가해주는거임 아래인풋박스보면 온체인지에 이 함수 써있음
    console.log(e.target.value);
  };

  const handleClick = () => {
    //이 함수는 버튼의 온클릭에 들어가잇음
    // setNames([input]);
    setNames([...names, input]); //이렇게 하면 6줄에서 정의한 names의 값을 복사해온거임 점 세개
    // 이렇게 복사해오면 고수여진구송중기 안없어지고 홍길동 추가됨
    // setNames([input, ...names]); //이렇게 순서를 바꾸면 새로 입력한 값이 맨 위로 출력됨
    setInput(""); //초기화시켜주는거임 근데 딱히 없어도 초기화는 되는듯?
  };
  return (
    <div>
      <input type="text" id="fname" onChange={handleChangeNames} value={input} />
      <button onClick={handleClick}>Add</button>

      {names.map((value, index) => {
        // (상태.map)
        return <p key={index}>{value}</p>;
        // 반복문으로 처리할때는 key 값을 줘야함 index는 고유값이라서 겹치는거 없음
        // 리턴을 써줘야함
        // 중괄호랑 리턴을 함께 지워줘도 됨
        // 근데 걍 다 붙여 헷갈려
      })}
    </div>
  );
};

export default MyUseState003;
