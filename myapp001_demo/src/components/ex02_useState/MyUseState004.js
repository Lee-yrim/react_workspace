import React, { useState } from "react";

const MyUseState004 = () => {
  //여기서 customer는 Object(객체)이다.
  const [customer, setCustomer] = useState({
    name: "고수",
    address: "서울시 강남구",
    phone: "010-000-0000",
  });

  const handleChangeName = (e) => {
    console.log(e.target.value);
    setCustomer((prevState) => {
      return { ...prevState, name: e.target.value };
    });
    //e.target.value 이거의 의미가 이벤트가 발생한 그부분이라는 말인듯
    // 윗윗줄처럼 콘솔에 나타냈을때 나오는것이 바로 그것임
    // ...prevState, name: e.target.value 이것의 의미는 이전의 상태를 복사해서 이전의 상태 그자리에 타겟점벨류의 이벤트값으로 업뎃 하겟다는 말인듯 / 이렇게 해줘야 확인눌럿을떄 리셋안되고 그대로 있음
  };

  const handleChangeAddress = (e) => {
    setCustomer((prevState) => {
      return { ...prevState, address: e.target.value };
    });
  };

  const handleChangePhone = (e) => {
    setCustomer((prevState) => {
      return { ...prevState, phone: e.target.value };
    });
  };

  return (
    <div>
      <p>
        <span>이름</span>
        <input type="text" value={customer.name} onChange={handleChangeName} />
        {/* 체인지 이벤트가 발생하면 해당함수 실행해라 */}
      </p>

      <p>
        <span>주소</span>
        <input type="text" value={customer.address} onChange={handleChangeAddress} />
      </p>

      <p>
        <span>전화번호</span>
        <input type="text" value={customer.phone} onChange={handleChangePhone} />
      </p>

      <button>확인</button>
    </div>
  );
};

export default MyUseState004;
