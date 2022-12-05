import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function ProductDetail() {
  const { productId } = useParams();

  useEffect(() => {
    getProductsDetail();
  }, []);

  const getProductsDetail = async () => {
    const productDetailUrl = "/api/product/productDetail";

    try {
      console.log("성공");
      const result = await axios.post(productDetailUrl, {
        params: {
          productId,
        },
      });

      console.log(result);
    } catch (err) {
      console.log("실패");
      console.log(err);
    }
  };

  return <p>{productId}번째 상품의 상세페이지 입니다</p>;
}
