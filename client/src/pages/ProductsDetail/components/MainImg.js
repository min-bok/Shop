import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import ButtonComponent from "../../../components/Button";

const ImgCont = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-y: hidden;
  align-items: center;
  background-color: #f2f2f2;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
`;

const StyledBsChevronLeft = styled(BsChevronLeft)`
  position: absolute;
  font-size: 24px;
  z-index: 999;
  cursor: pointer;
`;

const StyledBsChevronRight = styled(BsChevronRight)`
  position: absolute;
  right: 0;
  font-size: 24px;
  z-index: 999;
  cursor: pointer;
`;

const ImgScroll = styled.div`
  display: flex;
  width: calc(100% * 3);
  height: 100%;
  transform: translateX(${(props) => props.num}%);
  transition-duration: 0.5s;
`;

const ProductImg = styled.img`
  display: inline;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export default function MainImg() {
  const { productId } = useParams();
  const [mainImg, setMainImg] = useState();
  const [num, setNum] = useState(0);

  useEffect(() => {
    getMainImg();
  }, []);

  const ImgHandler = async () => {
    setNum((num - 100) % (100 * mainImg.length));
  };

  const getMainImg = async () => {
    const url = "/api/product/productMainImage";

    try {
      const result = await axios.get(url, {
        params: {
          val: productId,
        },
      });
      setMainImg(result.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ImgCont>
      <StyledBsChevronLeft onClick={ImgHandler} />
      <StyledBsChevronRight onClick={ImgHandler} />

      <ImgScroll num={num}>
        {mainImg &&
          mainImg.map((img) => {
            return <ProductImg key={img.id} src={img.path}></ProductImg>;
          })}
      </ImgScroll>
    </ImgCont>
  );
}
