import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Inner = styled.div`
  display: grid;
  width: 62%;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 60px;
  column-gap: 40px;
  padding: 100px 0;
  margin: 0 auto;
  background-color: #fdfdfd;
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fdfdfd;

  :hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }
`;

const ProductImg = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 0 0 10px 0;
`;

const ProductName = styled.p``;

const ProductCategoryWrap = styled.span`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5px;
  margin: 10px 0;
`;

const ProductCategoryText = styled.p`
  padding: 3px 5px;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
  background-color: #f2f2f2;
`;

const ProductPrice = styled(ProductName)`
  font-size: 18px;
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
    <Inner>
      {product &&
        product.map((data) => {
          return (
            <Link to={`/product/detail/${data.id}`} key={data.id}>
              <Cont>
                <ProductImg src={data.path}></ProductImg>
                <ProductName>{data.product_name}</ProductName>
                <ProductCategoryWrap>
                  <ProductCategoryText>{data.category1}</ProductCategoryText>
                  <ProductCategoryText>{data.category2}</ProductCategoryText>
                  <ProductCategoryText>{data.category3}</ProductCategoryText>
                </ProductCategoryWrap>
                <ProductPrice>
                  {data.product_price.toLocaleString("ko-KR")}원
                </ProductPrice>
              </Cont>
            </Link>
          );
        })}
    </Inner>
  );
}
