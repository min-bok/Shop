import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, reset } from "../reducers/counter";
import { useCounterCheck } from "../hooks/useCounterCheck";
import ButtonComponent from "./Button";

const CounterWrap = styled.div`
  display: grid;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #f2f2f2;
  grid-template-columns: repeat(3, 1fr);
  background-color: #fff;
`;

const CountNum = styled.p`
  display: flex;
  width: 100%;
  font-size: 24px;
  justify-content: center;
  align-items: center;
`;

export default function Counter() {
  let quantity = useSelector((state) => state.counter.quantity);

  const location = useLocation();
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onReset = () => dispatch(reset());

  useEffect(() => {
    onReset();
  }, [location]);

  const disabled = useCounterCheck(quantity);

  return (
    <>
      <CounterWrap>
        <ButtonComponent
          method={onDecrease}
          name="-"
          bgColor="#fdfdfd"
          fontSize="24px"
          border="1px solid #f2f2f2"
          disabled={disabled}
        />
        <CountNum>{quantity}</CountNum>
        <ButtonComponent
          method={onIncrease}
          name="+"
          bgColor="#fdfdfd"
          fontSize="24px"
          border="1px solid #f2f2f2"
        />
      </CounterWrap>
    </>
  );
}
