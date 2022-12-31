import React from "react";
import styled from "styled-components";

const LoginInput = ({ loginBtnClick }) => {
  return (
    <LoginInputContainer>
      <div className="login-flex login-wrapper">
        <input
          className="login-input"
          placeholder="아이디 입력"
          //   onChange={handleIdInput}
        />
      </div>
      <div className="login-flex login-wrapper">
        <input
          className="login-input"
          type="password"
          placeholder="비밀번호 입력 (영문 숫자,특수문자 조합)"
          //   onChange={handlePwInput}
        />
      </div>
      <div className="check-box-stlye">
        <input type="checkbox" />
        <label htmlFor="scales"> 아이디저장</label>
      </div>

      <div className="login-flex button-wrapper">
        <button
          onClick={loginBtnClick}
          //   style={{ backgroundColor: isValid ? "#5c95f0" : "#f0f0f0" }}
          className="button-style"
        >
          로그인
        </button>
      </div>
    </LoginInputContainer>
  );
};

const LoginInputContainer = styled.div``;
export default LoginInput;
