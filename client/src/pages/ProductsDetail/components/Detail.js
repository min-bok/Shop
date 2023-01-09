import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

const Cont = styled.img`
  width: 100%;
  height: auto;
  margin: 0;
  background-color: #f2f2f2;
`;

export default function Detail() {
  const { productId } = useParams();
  const [img, setImg] = useState();

  useEffect(() => {
    getImg();
  }, []);

  const getImg = async () => {
    const url = "/api/product/productInfoImage";

    try {
      const result = await axios.get(url, {
        params: {
          val: productId,
        },
      });

      setImg(result.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {img &&
        img.map((img) => {
          return <Cont key={img.id} src={img.path}></Cont>;
        })}
    </>
  );
}
