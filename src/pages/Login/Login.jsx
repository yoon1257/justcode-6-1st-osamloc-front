import React, { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import LoginInput from "./components/LoginInput";
import OtherLogin from "./components/OtherLogin";

function Login() {
  //로그인창 활성화 초기값 설정
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [isValid, setIsValid] = useState(false);

  //button을 눌렀을떄 Login페이지로 이동하기
  const goMain = () => {
    navigate("/");
  };
  //button을 눌럿을떄 signup페이지로 이동하기
  const goSignUp = () => {
    navigate("/signup");
  };

  // 조건에 맞게 되면 로그인 버튼 활성화
  const handleIdInput = (e) => {
    const idValue = e.target.value;
    setId(idValue);
    idValue.length < 13 &&
    idValue.length >= 4 &&
    pw.length < 17 &&
    pw.length >= 8
      ? setIsValid(true)
      : setIsValid(false);
  };

  const handlePwInput = (e) => {
    const pwValue = e.target.value;
    setPw(pwValue);
    id.length < 13 &&
    id.length >= 4 &&
    pwValue.length < 17 &&
    pwValue.length >= 1
      ? setIsValid(true)
      : setIsValid(false);
  };
  const loginBtnClick = () => {
    const body = {
      account: id,
      password: pw,
    };
    fetch("http://localhost:10010/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.message == "LOGIN_SUCCESS") {
          alert("로그인에 성공하였습니다.");
          localStorage.setItem("token", json.token.token);
          localStorage.setItem("account", json.token.account);
          navigate("/");
        } else {
          alert("아이디와 비밀번호를 다시 확인해주세요 ");
        }
      });
  };

  return (
    <div className="container-wrapper">
      <div className="login-container">
        <div className="headerbar-flex">
          <span>로그인</span>
          <button onClick={goMain} className="close-button-style" type="button">
            <img
              className="close-button-size"
              src="image/Login/close.png"
              alt="close"
            />
          </button>
        </div>
        <p className="noice">
          아모레퍼시픽 뷰티포인트 통합회원
          <br />
          아이디로 로그인해주세요.
        </p>
        <div>
          <LoginInput loginBtnClick={loginBtnClick} />
          <OtherLogin />
          <div className="find-tag-align">
            <span className="find-tag">아이디찾기</span>
            <span className="find-tag"> | </span>
            <span className="find-tag">비밀번호찾기</span>
          </div>
          <div className="signup-wrapper">
            <button onClick={goSignUp} className="signup-button-style">
              아직 회원이 아니세요? 회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
