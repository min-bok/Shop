import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const ImgCont = styled.div`
  width: 600px;
  height: 600px;
  background-color: pink;
  overflow: scroll;
  overflow-y: hidden;
`;

const ImgScroll = styled(ImgCont)`
  width: 1800px;
`;

const ProductImg = styled.img`
  height: 600px;
  width: 600px;
  opacity: 0.4;
`;

export default function ProductMainImg() {
  const { productId } = useParams();
  const [mainImg, setMainImg] = useState();

  useEffect(() => {
    getMainImg();
  }, []);

  const getMainImg = async () => {
    const url = "/api/product/productMainImage";

    try {
      console.log("성공");

      const result = await axios.post(url, {
        params: {
          productId,
        },
      });
      setMainImg(result.data[0]);
    } catch (err) {
      console.log("실패");
      console.log(err);
    }
  };

  return (
    <>
      <ImgCont>
        <ImgScroll>
          {mainImg &&
            mainImg.map((img) => {
              return <ProductImg src={img.path} />;
            })}
        </ImgScroll>
      </ImgCont>
    </>
  );
}
