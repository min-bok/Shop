import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SubmitVal from "./components/SubmitVal";

const Cont = styled.div`
  position: absolute;
  width: 500px;
  height: 350px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
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

export default function Signup() {
  return (
    <Cont>
      <Inner>
        <Link to="/">
          <Logo>Dimple</Logo>
        </Link>
        <SubmitVal />
      </Inner>
    </Cont>
  );
}
