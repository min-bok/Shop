import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AdSlider from "../../components/AdSlider";
import ProductList from "./ProductList";

const ProductsCont = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* gap: 20px; */
  padding: 80px 320px;
`;

export default function Home() {
  return (
    <>
      <AdSlider />
      <ProductsCont>
        <ProductList />
      </ProductsCont>
    </>
  );
}
