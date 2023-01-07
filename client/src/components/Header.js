import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";
import LogoImg from "../assets/logo.png";

import ButtonComponent from "./Button";
import InputComponent from "./Input";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Cont = styled.div`
  width: 100%;
  height: auto;
  background: #fdfdfd;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.1);
`;

const Inner = styled.div`
  display: block;
  width: 62%;
  height: 100%;
  margin: 0 auto;
`;

const Sub = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

const GosellerPageBtn = styled.p`
  color: #7f7f7f;
  font-size: 14px;
`;

const Main = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 64px;
  background: #fdfdfd;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 38px;
  height: 38px;
  background-size: cover;
`;

const InputWrap = styled.form`
  display: inline;
  position: relative;
`;

const StyledBiSearch = styled(BiSearch)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
  margin: auto;
  font-size: 21px;
  color: #7f7f7f;
`;

const StyledBiUser = styled(BiUser)`
  display: block;
  font-size: 24px;
  color: #7f7f7f;
  margin: 0 0 0 20px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserWrap = styled.div`
  position: relative;
  z-index: 999;
`;

export default function Header() {
  const [isLogin, setIsLogin] = useState(null);
  const [printDrop, setPrintDrop] = useState(false);

  useEffect(() => {
    setIsLogin(sessionStorage.getItem("userId"));
  }, []);

  const PrintSearchInput = () => {
    return (
      <InputWrap>
        <InputComponent
          type="text"
          placeholder="상품 검색"
          width="220px"
          height="33px"
          bgColor="#f2f2f2"
          padding="0 40px"
          margin="0 40px 0 0"
          color="#7F7F7F"
          border="none"
          radius="5px"
          borderBottom="none"
        />
        <StyledBiSearch />
      </InputWrap>
    );
  };

  // 로그인하지 않았을 때 헤더 버튼
  const PrintIsntLoginBtn = () => {
    return (
      <>
        <Link to={"/login"}>
          <ButtonComponent
            name="로그인"
            bgColor="#FDFDFD"
            border="0.5px solid rgba(204, 204, 204, 0.5)"
            hoverBorder="0.5px solid rgba(204, 204, 204, 0.5)"
            height="33px"
          />
        </Link>
        <Link to={"/signup"}>
          <ButtonComponent
            name="회원가입"
            color="#fdfdfd"
            margin="0 0 0 15px"
          />
        </Link>
      </>
    );
  };

  const printDropdown = () => {
    if (printDrop === true) {
      setPrintDrop(false);
    } else {
      setPrintDrop(true);
    }
  };

  // 로그인했을 때 헤더 버튼
  const PrintIsLoginBtn = () => {
    return (
      <Wrap>
        <Link to={"/cart"}>
          <RiShoppingCartLine display="block" size="24" color="7F7F7F" />
        </Link>
        <UserWrap>
          <StyledBiUser onClick={printDropdown} cursor="pointer" />
          {printDrop ? <Dropdown /> : null}
        </UserWrap>
      </Wrap>
    );
  };

  return (
    <Cont>
      <Inner>
        <Sub>
          {/* <GosellerPageBtn>판매자 페이지로 이동</GosellerPageBtn> */}
        </Sub>
        <Main>
          <Link to={"/"}>
            <Logo src={LogoImg} />
          </Link>
          <Wrap>
            <PrintSearchInput />
            {isLogin ? <PrintIsLoginBtn /> : <PrintIsntLoginBtn />}
          </Wrap>
        </Main>
      </Inner>
    </Cont>
  );
}
