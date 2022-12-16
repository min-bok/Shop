import React from "react";
import styled from "styled-components";
import ButtonComponent from "../../../components/Button";

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function OrderBtn() {
  return (
    <Wrap>
      <ButtonComponent
        name="상품 주문 하기"
        padding="8px 60px"
        margin="40px 0 0 0"
        color="#fdfdfd"
      />
    </Wrap>
  );
}
