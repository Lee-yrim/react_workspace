import { useEffect, useState } from "react";

const MyuseEffect002 = () => {
  let data = 0;
  const [num, setNum] = useState(0);

  const handleData = () => {
    console.log((data = data + 1));
    //문자 입력해도 숫자 하나씩 증가함
  };

  const handleName = (e) => {
    console.log(e.target.value + 1);
    setNum(num + 1);
  }; //이부분 잘 모르겠음 / 콘솔에 숫자 왜 증가안돼? 웨않되? 화딱지 이만큼

  useEffect(() => {
    console.log("data:" + data);
  });

  return (
    <div>
      <input type="text" placeholder="data" onChange={handleData} />
      <input type="text" placeholder="num" onChange={handleName} />
    </div>
  );
};

export default MyuseEffect002;
