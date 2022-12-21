import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginVal from "./components/LoginVal";

const Cont = styled.div`
  position: absolute;
  width: 350px;
  height: 300px;
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

const Logo = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #6d94cc;
`;

export default function Login() {
  return (
    <Cont>
      <Inner>
        <Link to="/">
          <Logo>Dimple</Logo>
        </Link>
        <LoginVal />
      </Inner>
    </Cont>
  );
}
