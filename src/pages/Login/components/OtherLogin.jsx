import React from "react";
import styled from "styled-components";

const OtherLogin = () => {
  return (
    <OtherLoginContainer>
      <div className="img-flex">
        <div>
          <img
            className="logo-size"
            alt="cellphone-logo"
            src="image/Login/sellphone.png"
          />
          <p>
            휴대폰
            <br />
            로그인
          </p>
        </div>
        <div>
          <img
            className="logo-size"
            alt="kakao-logo"
            src="image/Login/kakao.png"
          />
          <p>
            카카오
            <br />
            로그인
          </p>
        </div>
        <div>
          <img
            className="logo-size"
            alt="naver-logo"
            src="image/Login/naver.png"
          />
          <p>
            네이버
            <br />
            로그인
          </p>
        </div>
        <div>
          <img
            className="logo-size"
            alt="more-logo"
            src="image/Login/more.png"
          />
          <p>더보기</p>
        </div>
      </div>
    </OtherLoginContainer>
  );
};

const OtherLoginContainer = styled.div``;
export default OtherLogin;
