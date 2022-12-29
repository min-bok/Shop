import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import MainImg from "./components/MainImg";
import Information from "./components/Information";
import Detail from "./components/Detail";

const Cont = styled.div`
  height: 100vh;
  margin: 0 auto;
  padding: 100px 0 0 0;
`;

const Inner = styled.div`
  width: 62%;
  margin: 0 auto;
`;

const Wrap = styled.div`
  height: 60%;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  column-gap: 100px;
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
      const result = await axios.get(url, {
        params: {
          val: productId,
        },
      });

      setInfo(result.data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {info &&
        info.map((data) => {
          return (
            <Cont key={data.id}>
              <Inner>
                <Wrap>
                  <MainImg />
                  <Information data={data} />
                </Wrap>
                <Detail />
              </Inner>
            </Cont>
          );
        })}
    </>
  );
}
