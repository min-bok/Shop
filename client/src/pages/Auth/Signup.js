import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SignupVal from "./components/SignupVal";
import LogoImg from "../../assets/logo.png";

const Cont = styled.div`
  position: absolute;
  width: 350px;
  height: 380px;
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

export default function Signup() {
  return (
    <Cont>
      <Inner>
        <Link to="/">
          <Logo src={LogoImg} />
        </Link>
        <SignupVal />
      </Inner>
    </Cont>
  );
}
