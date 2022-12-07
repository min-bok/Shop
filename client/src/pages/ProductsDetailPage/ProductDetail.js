import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductMainImg from "./ProductMainImg";
import axios from "axios";

import ProductText from "./ProductText";

const Top = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  margin: 0 auto;
`;

const DetailImg = styled.img`
  width: 70%;
  height: 500px;
  background-color: yellowgreen;
`;

export default function ProductDetail() {
  const { productId } = useParams();
  const [info, setInfo] = useState();

  useEffect(() => {
    getProductsInfo();
  }, []);

  const getProductsInfo = async () => {
    const url = "/api/product/productDetail";

    try {
      console.log("성공");

      const result = await axios.post(url, {
        params: {
          productId,
        },
      });

      setInfo(result.data[0]);
    } catch (err) {
      console.log("실패");
      console.log(err);
    }
  };
  return (
    <>
      {info &&
        info.map((data) => {
          return (
            <>
              <Top>
                <ProductMainImg />
                <ProductText data={data} />
              </Top>
              <DetailImg src={data.path}></DetailImg>
            </>
          );
        })}
    </>
  );
}
