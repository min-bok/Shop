import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ButtonComponent from "../../../components/Button";

const BtnWrap = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1.2fr;
  column-gap: 15px;
`;

export default function PrintBtn() {
  const { productId } = useParams();
  const userId = sessionStorage.getItem("userId");
  const quantity = useSelector((state) => state.counter.quantity);

  const saveProduct = async () => {
    const url = "/api/product/cartListInsert";
    const val = [productId, userId, quantity];

    try {
      const result = await axios.post(url, {
        data: {
          val,
        },
      });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BtnWrap>
      <ButtonComponent
        method={saveProduct}
        name="바로 구매"
        width="100%"
        height="60px"
        bgColor="#fdfdfd"
        border="0.5px solid rgba(204, 204, 204, 1)"
      />
      <Link to={`/cart`}>
        <ButtonComponent
          method={saveProduct}
          name="장바구니"
          width="100%"
          height="60px"
          color="#fdfdfd"
        />
      </Link>
    </BtnWrap>
  );
}
