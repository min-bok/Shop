import React from "react";
import axios from "axios";
import styled from "styled-components";
import ButtonComponent from "../../../components/Button";

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function OrderBtn(props) {
  console.log(props.products);

  // update
  const removeItemHandle = async () => {
    console.log(2222);
    // const url = "/api/product/cartListDelete";
    // try {
    //   const result = await axios.delete(url, {
    //     data: {
    //       1,
    //     },
    //   });
    //   return result;
    // } catch (err) {
    //   console.log(err);
    // }
  };
  return (
    <Wrap>
      <ButtonComponent
        method={removeItemHandle}
        name="상품 주문 하기"
        padding="8px 60px"
        margin="40px 0 0 0"
        color="#fdfdfd"
      />
    </Wrap>
  );
}
