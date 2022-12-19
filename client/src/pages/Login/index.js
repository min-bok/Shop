import React from "react";
import styled from "styled-components";

const UserIdInput = styled.input``;
const UserPasswordInput = styled.input``;
const LoginBtn = styled.button``;

export default function Login() {
  return (
    <>
      <UserIdInput></UserIdInput>
      <UserPasswordInput></UserPasswordInput>
      <LoginBtn>로그인</LoginBtn>
    </>
  );
}
