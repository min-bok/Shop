import React, { useEffect, useState } from "react";
import styled from "styled-components";
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

export default function Counter({ quantity, diff, onIncrease, onDecrease }) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    Check();
  }, [quantity]);

  const Check = async () => {
    if (quantity === 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

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
