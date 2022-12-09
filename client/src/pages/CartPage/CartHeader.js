import React from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;

const Wrap = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
`;

const Text = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;

export default function CartHeader(props) {
  return (
    <Cont>
      <Wrap>
        <Text fontSize={"21px"} fontWeight={700} color={"#251D1C"}>
          Your Cart
        </Text>
        <Text fontSize={"14px"} fontWeight={400} color={"#251D1C"}>
          {props.itemQuantity} Itmes
        </Text>
      </Wrap>
      <Wrap>
        <Text fontSize={"14px"} fontWeight={400} color={"#251D1C"}>
          Total
        </Text>
        <Text fontSize={"21px"} fontWeight={700} color={"#251D1C"}>
          \4,494
        </Text>
      </Wrap>
    </Cont>
  );
}
