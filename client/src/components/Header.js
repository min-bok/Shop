import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo-hodu.svg";
import { Link } from "react-router-dom";

const HeaderCont = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: 100vw;
  height: 90px;
  background-color: #fff;
  padding: 0 10vw;
  box-sizing: border-box;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SearchBar = styled.input.attrs({
  type: "text",
})`
  width: 400px;
  height: 40%;
`;

const LogoImg = styled.p`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

const LoginBtn = styled(LogoImg)`
  font-size: 21px;
  font-weight: bold;
`;

const CartBtn = styled.img`
  width: 30px;
  height: 30px;
  background-color: #f2f2f2;
  margin: 0 0 0 200px;
`;

// const Wrap = styled.div`
//   width: 100vw;
//   height: 90px;
//   display: flex;
//   align-items: center;
//   box-sizing: border-box;
//   padding: 0 320px 0 320px;

//   background: #fff;
//   box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
// `;

// const LogoImg = styled.img.attrs({
//   src: `${Logo}`,
//   alt: "로고 이미지",
// })`
//   height: 38px;
//   width: 124px;
//   left: 320px;
//   top: 26px;
//   border-radius: 0px;
// `;

// const SearchBar = styled.input.attrs({
//   placeholder: "검색어를 입력해주세요",
// })`
//   height: 46px;
//   width: 400px;
//   left: 474px;
//   top: 22px;
//   border-radius: 50px;
// `;

// const CartBtn = styled.span`
//   font-weight: bold;
//   justify-self: right;

//   :hover {
//     color: #21bf48;
//   }
// `;

// const LoginBtn = styled(CartBtn)``;

function Header() {
  return (
    <HeaderCont>
      <SearchBar />
      <LogoImg>Dimple</LogoImg>
      <Wrap>
        <LoginBtn>Login</LoginBtn>
        <CartBtn />
      </Wrap>
    </HeaderCont>
    // <Wrap>
    //   <Link to={`/`}>
    //     <LogoImg />
    //   </Link>
    //   <SearchBar />
    //   {/* <BtnWrap> */}
    //   <Link to={`/cart`}>
    //     <CartBtn>장바구니</CartBtn>
    //   </Link>
    //   <Link to={`/login`}>
    //     <LoginBtn>로그인</LoginBtn>
    //   </Link>
    //   {/* </BtnWrap> */}
    // </Wrap>
  );
}

export default Header;
