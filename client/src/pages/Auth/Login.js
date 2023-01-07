import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginVal from "./components/LoginVal";
import LogoImg from "../../assets/logo.png";

const Cont = styled.div`
  position: absolute;
  width: 350px;
  height: 330px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  background-size: cover;
  margin-bottom: 30px;
`;

const SignupBtn = styled.p`
  font-size: 12px;
  color: #7f7f7f;
`;

export default function Login() {
  return (
    <Cont>
      <Inner>
        <Link to="/">
          <Logo src={LogoImg} />
        </Link>
        <LoginVal />
        <Link to="/signup">
          <SignupBtn>회원가입</SignupBtn>
        </Link>
      </Inner>
    </Cont>
  );
}
