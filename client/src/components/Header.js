import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo-hodu.svg";

const Wrap = styled.div`
  width: 100vw;
  height: 90px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 320px 0 320px;

  background: #fff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

const LogoImg = styled.img.attrs({
  src: `${Logo}`,
  alt: "로고 이미지",
})`
  height: 38px;
  width: 124px;
  left: 320px;
  top: 26px;
  border-radius: 0px;
`;

// const BtnWrap = styled.div`
//   justify-items: flex-end;
//   background-color: pink;
// `;

const SearchBar = styled.input.attrs({
  placeholder: "검색어를 입력해주세요",
})`
  height: 46px;
  width: 400px;
  left: 474px;
  top: 22px;
  border-radius: 50px;
`;

const CartBtn = styled.span`
  font-weight: bold;
  justify-self: right;

  :hover {
    color: #21bf48;
  }
`;

const LoginBtn = styled(CartBtn)``;

function Header() {
  return (
    <Wrap>
      <LogoImg />
      <SearchBar />
      {/* <BtnWrap> */}
      <CartBtn>장바구니</CartBtn>
      <LoginBtn>로그인</LoginBtn>
      {/* </BtnWrap> */}
    </Wrap>
  );
}

export default Header;
