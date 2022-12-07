import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const CartCont = styled.div`
  width: 70%;
  height: 200px;
  background-color: pink;
  margin: 0 auto;
`;

const ProductImg = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 10px;
`;

const ProductName = styled.p``;
const ProductPrice = styled(ProductName)``;
const DeliveryFee = styled(ProductName)``;

export default function Cart() {
  const url = "/api/product/cartList";
  const productId = JSON.parse(localStorage.getItem("productId"));
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const result = await axios.post(url, {
      params: {
        productId,
      },
    });

    setProducts(result.data.map((el) => el[0]));
  };

  return (
    <>
      {products &&
        products.map((data) => {
          return (
            <CartCont key={data[0].id}>
              <ProductImg src={data[0].path} />
              <ProductName>{data[0].product_name}</ProductName>
              <ProductPrice>{data[0].product_price}</ProductPrice>
              <DeliveryFee>{data[0].delivery_price}</DeliveryFee>
            </CartCont>
          );
        })}
    </>
  );
}
