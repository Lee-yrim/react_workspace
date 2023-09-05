import React, { useState } from "react";

//004랑 비슷한데 4에서는 함수를 세개 정의해서 각각 줬다면
// 이거는 어차피 다 변경해서 저장되게하는거니까 공통으로 빼서 하는거임
const MyUseState005 = () => {
  const [customer, setCustomer] = useState({
    name: "고수",
    address: "서울시 강남구",
    phone: "010-000-0000",
  });
  //현재이벤트가 발생한 객체값을 받기위한 변수 e
  const handleChange = (e) => {
    // setCustomer({ ...customer, [e.target.id]: e.target.value });
    //[e.target.id]이거는 key값이라서 대괄호로 묶어줘야함

    //e.target으로부터 id, value값을 추출한다.
    // const { id, value } = e.target; //위에서 한거를 이렇게 받아줘서
    // setCustomer({ ...customer, [id]: value }); //이렇게 해도됨
    //둘이 같은거임

    //디티오가 여기서는 객체라고 생각하면 된대

    // 이것도 됨 세번째방법 같은ㄴ거임
    const { id, value } = e.target;
    setCustomer((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  return (
    <div>
      <p>
        <span>이름</span>
        <input type="text" value={customer.name} id="name" onChange={handleChange} />
      </p>

      <p>
        <span>주소</span>
        <input type="text" value={customer.address} id="address" onChange={handleChange} />
      </p>

      <p>
        <span>전화번호</span>
        <input type="text" value={customer.phone} id="phone" onChange={handleChange} />
      </p>

      <button>확인</button>
    </div>
  );
};

export default MyUseState005;
