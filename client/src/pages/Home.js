import React from "react";
import styled from "styled-components";

import AdSlider from "../components/AdSlider";

const ProductCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 490px;
  background-color: pink;
`;

const ProductImg = styled.div`
  height: 380px;
  width: 380px;
  border-radius: 10px;
  background-color: violet;
`;

const ProductName = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
`;

const ProductCategoryWrap = styled.span`
  display: flex;
  flex-direction: row;
`;

const ProductCategoryText = styled.p`
  background-color: grey;
  padding: 3px 5px;
  border-radius: 5px;
`;

const ProductPrice = styled(ProductName)`
  font-size: 24px;
  font-weight: 700;
`;

function Home() {
  return (
    <>
      <AdSlider />
      <ProductCont>
        <ProductImg></ProductImg>
        <ProductName>sfsfdd</ProductName>
        <ProductCategoryWrap>
          <ProductCategoryText>전자제품</ProductCategoryText>
          <ProductCategoryText>컴퓨터</ProductCategoryText>
        </ProductCategoryWrap>
        <ProductPrice>29000원</ProductPrice>
      </ProductCont>
    </>
  );
}

export default Home;
