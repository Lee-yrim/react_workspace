import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigator = useNavigate();
  const [inputs, setInputs] = useState({
    memberEmail: "",
    memberPass: "",
  });
  const { memberEmail, memberPass } = inputs;
  const handleValueChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/login", inputs)
      .then((response) => {
        // console.log(response);
        console.log(response.data);
        // let jwtToken = response.headers['authorization'];
        let jwtToken = response.headers.get("authorization");
        // alert(response.headers); //알림창으로 확인해주는거임 / 확인하고 주석해버려
        console.log(jwtToken);

        localStorage.setItem("Authorization", jwtToken);
        localStorage.setItem("memberEmail", response.data.memberEmail);
        localStorage.setItem("memberName", response.data.memberName);
        localStorage.setItem("authRole", response.data.authRole);
        localStorage.setItem("isLogin", true);

        setInputs({ memberEmail: "", memberPass: "" });
        // setInputs({...inputs, memberEmail:'', memberPass:''})
      })
      .then((response) => {
        // navigator('/');
        window.location.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container text-center mt-5">
      <div className="mx-5">
        <h1>로그인</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group mt-1">
            <input type="email" name="memberEmail" className="form-control" id="memberEmail" value={memberEmail} placeholder="이메일" maxLength="20" onChange={handleValueChange} />
          </div>
          <div className="form-group mt-1">
            <input type="password" className="form-control" name="memberPass" id="memberPass" value={memberPass} placeholder="비밀번호" maxLength="20" onChange={handleValueChange} />
          </div>
          <div className="mt-1">
            <button type="submit" className="btn btn-primary">
              로그인
            </button>
            <Link className="btn btn-primary" to="/joinadd">
              회원 가입
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
