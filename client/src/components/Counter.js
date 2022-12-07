import React, { useState } from "react";
import styled from "styled-components";
import Cart from "../pages/CartPage/Cart";

const CounterWrap = styled.div`
  display: grid;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #f2f2f2;
  grid-template-columns: repeat(3, 1fr);
  background-color: #fff;
`;

const MinusBtn = styled.div`
  display: flex;
  width: 100%;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  border: 1px solid #f2f2f2;
  cursor: pointer;

  :hover {
    background-color: #f2f2f2;
  }
`;

const CountNum = styled.p`
  display: flex;
  width: 100%;
  font-size: 24px;
  justify-content: center;
  align-items: center;
`;

const PlusBtn = styled(MinusBtn)``;

const TotalPrice = styled.p``;

export default function Counter(props) {
  const [quantity, setQuantity] = useState(1);

  const removeProduct = async () => {
    for (let i = quantity; i > 1; i--) {
      setQuantity(quantity - 1);
    }

    if (quantity === 1) {
      alert("주문가능한 최소 수량은 1개 입니다.");
    }
  };

  const addProduct = async () => {
    setQuantity(quantity + 1);
  };

  // console.log(quantity);
  // localStorage.setItem("test", quantity);

  return (
    <>
      {props.cart ? (
        <CounterWrap>
          <MinusBtn>-</MinusBtn>
          <CountNum>3</CountNum>
          <PlusBtn>+</PlusBtn>
        </CounterWrap>
      ) : (
        <>
          <CounterWrap>
            <MinusBtn onClick={removeProduct}>-</MinusBtn>
            <CountNum>{quantity}</CountNum>
            <PlusBtn onClick={addProduct}>+</PlusBtn>
          </CounterWrap>
          <TotalPrice>
            총 상품 금액 총 수량 {quantity}개 |{" "}
            {(quantity * props.price).toLocaleString("ko-KR")}원
          </TotalPrice>
        </>
      )}
    </>
  );
}
