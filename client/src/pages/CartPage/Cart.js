import React from "react";
import styled from "styled-components";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";

const CartCont = styled.div`
  position: absolute;
  width: 70%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const OrderBtn = styled.button`
  position: absolute;
  right: 0;
  padding: 8px 60px;
  border: none;
  background-color: #000;
  color: #fff;
  margin: 40px 0;
`;

export default function Cart() {
  return (
    <CartCont>
      <CartItem />
      <OrderBtn>상품 주문 하기</OrderBtn>
    </CartCont>
  );
}
