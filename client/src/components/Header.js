import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";

const Cont = styled.div`
  height: 90px;
  /* background-color: beige; */
`;

const InnerWrap = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  /* background-color: pink; */
  align-items: center;
`;

const Logo = styled.p`
  position: absolute;
  font-size: 28px;
  font-weight: 700;
  width: 100px;
  height: 30px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;

const Searh = styled.div`
  position: relative;
  height: 34px;
`;

const SearhInput = styled.input.attrs({
  type: "text",
})`
  width: 36px;
  height: 34px;
  background-color: #fff;
  color: #777;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 12px;
  transition: width 0.4s;
  outline: none;

  :focus {
    width: 190px;
    border-color: #333;
  }
`;

const StyledBsSearch = styled(BsSearch)`
  font-size: 18px;
  height: 18px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  margin: auto;
`;

const Menu = styled.ul`
  position: absolute;
  display: flex;
  right: 0;
`;

const LoginBtn = styled.p`
  font-size: 21px;
`;

const StyledCartBtn = styled(BsCart2)`
  font-size: 21px;
`;

const StyledLink = styled(Link)`
  padding: 11px 16px;
  color: #333;
`;

function Header() {
  return (
    <Cont>
      <InnerWrap>
        <Searh>
          <SearhInput />
          <StyledBsSearch />
        </Searh>

        <Link to={`/`}>
          <Logo>Dimple</Logo>
        </Link>

        <Menu>
          <StyledLink to={`/login`}>
            <LoginBtn>Login</LoginBtn>
          </StyledLink>

          <StyledLink to={`/cart`}>
            <StyledCartBtn />
          </StyledLink>
        </Menu>
      </InnerWrap>
    </Cont>
  );
}

export default Header;
