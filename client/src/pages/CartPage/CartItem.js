import styled from "styled-components";
import { useState, useEffect } from "react";

const Cont = styled.div`
  display: flex;
  height: auto;
  padding: 30px 0;
  border: 0.75px solid #f2f2f2;
  border-left: none;
  border-right: none;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
`;

const ProductImg = styled.div`
  width: 200px;
  height: 150px;
  background-color: #f2f2f2;
`;

const ProductName = styled.p`
  font-size: 21px;
  font-weight: 700;
`;

const Brand = styled(ProductName)`
  font-size: 16px;
  font-weight: 400;
  color: gray;
`;

const Delivery = styled(ProductName)`
  font-size: 14px;
  font-weight: 400;
  color: lightgray;
`;

const QuantityWrap = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityText = styled(Delivery)``;

const QuantityNum = styled.span`
  font-size: 18px;
  border: 1px solid lightgray;
  padding: 5px 8px;
  margin: 0 0 0 10px;
`;

const TotalPrice = styled(ProductName)``;

const RemoveBtn = styled.p`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

const PriceWrap = styled(QuantityWrap)`
  box-sizing: border-box;
  height: 150px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 25px 0;
`;

export default function CartItem() {
  return (
    <Cont>
      <ProductImg />
      <div>
        <ProductName>Product Name</ProductName>
        <Brand>Brand</Brand>
        <Delivery>택배배송 / 2,500원</Delivery>
      </div>
      <QuantityWrap>
        <QuantityText>수량</QuantityText>
        <QuantityNum>4</QuantityNum>
      </QuantityWrap>
      <PriceWrap>
        <RemoveBtn>X</RemoveBtn>
        <TotalPrice>\ 25,000원</TotalPrice>
      </PriceWrap>
    </Cont>
  );
}
