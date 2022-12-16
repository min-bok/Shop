import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";

import ButtonComponent from "./Button";
import InputComponent from "./Input";

const Cont = styled.div`
  width: 100%;
  height: 104px;
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

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #6d94cc;
`;

const InputWrap = styled.div`
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

export default function Header() {
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
          outline="1.25px solid #6d94cc"
          margin="0 40px 0 0"
          color="#7F7F7F"
        />
        <StyledBiSearch />
      </InputWrap>
    );
  };

  // 회원가입 Link 연결하기
  const PrintIsntLoginBtn = () => {
    return (
      <>
        <Link to={"/login"}>
          <ButtonComponent
            name="로그인"
            bgColor="#FDFDFD"
            border="0.5px solid rgba(204, 204, 204, 1)"
            height="33px"
          />
        </Link>
        <ButtonComponent name="회원가입" margin="0 0 0 15px" />
      </>
    );
  };

  // 유저 누르면 뭐나오는게 좋을까
  const PrintIsLoginBtn = () => {
    return (
      <Wrap display="flex">
        <Link to={"/cart"}>
          <RiShoppingCartLine display="block" size="24" color="7F7F7F" />
        </Link>
        <StyledBiUser />
      </Wrap>
    );
  };

  return (
    <Cont>
      <Inner>
        <Sub>
          <GosellerPageBtn>판매자 페이지로 이동</GosellerPageBtn>
        </Sub>

        <Main>
          <Link to={"/"}>
            <Logo>Dimple</Logo>
          </Link>
          <Wrap>
            <PrintSearchInput />
            <PrintIsntLoginBtn />
            {/* <PrintIsLoginBtn /> */}
          </Wrap>
        </Main>
      </Inner>
    </Cont>
  );
}
