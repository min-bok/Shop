import React from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  height: 150px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.75px solid #f2f2f2;
  border-left: none;
  border-right: none;
`;

const Nothing = styled.p`
  font-size: 18px;
  color: #595959;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 14px;
  color: #7f7f7f;
  margin: 20px 0 0 0;
`;

export default function NullCart() {
  return (
    <Cont>
      <Nothing>장바구니에 담긴 상품이 없습니다.</Nothing>
      <Text>원하는 상품을 장바구니에 담아보세요!</Text>
    </Cont>
  );
}
