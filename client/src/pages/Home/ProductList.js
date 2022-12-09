import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const ProductCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 380px;
  height: 490px;
  background-color: #fff;

  :hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }
`;

const StyledLink = styled(Link)`
  text-decoration-line: none;
  color: #251d1c;
`;

const ProductImg = styled.img`
  height: 380px;
  width: 380px;
  border-radius: 10px;
`;

const ProductName = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
`;

const ProductCategoryWrap = styled.span`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
`;

const ProductCategoryText = styled.p`
  background-color: #f2f2f2;
  padding: 3px 5px;
  border-radius: 5px;
  text-align: center;
`;

const ProductPrice = styled(ProductName)`
  font-size: 24px;
  font-weight: 700;
`;

export default function ProductList() {
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductsList();
  }, []);

  const getProductsList = async () => {
    const url = "/api/product/productList";
    try {
      const result = await axios.post(url);

      setProduct(result.data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {product &&
        product.map((data) => {
          return (
            <StyledLink to={`/product/detail/${data.id}`} key={data.id}>
              <ProductCont>
                <ProductImg src={data.path}></ProductImg>
                <ProductName>{data.product_name}</ProductName>
                <ProductCategoryWrap>
                  <ProductCategoryText>{data.category1}</ProductCategoryText>
                  <ProductCategoryText>{data.category2}</ProductCategoryText>
                  <ProductCategoryText>{data.category3}</ProductCategoryText>
                </ProductCategoryWrap>
                <ProductPrice>{data.product_price}원</ProductPrice>
              </ProductCont>
            </StyledLink>
          );
        })}
    </>
  );
}
