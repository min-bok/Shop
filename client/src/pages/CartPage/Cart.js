import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Counter from "../../components/Counter";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";

const CartCont = styled.div`
  position: absolute;
  width: 70%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const OrderBtn = styled.button`
  position: absolute;
  right: 0;
  padding: 8px 60px;
  border: none;
  background-color: #000;
  color: #fff;
`;

// const CartCont = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   width: 70%;
//   height: 200px;
//   background-color: pink;
//   margin: 0 auto;
// `;

// const ProductImg = styled.img`
//   height: 160px;
//   width: 160px;
//   border-radius: 10px;
// `;

// const ProductName = styled.p``;
// const ProductPrice = styled(ProductName)``;
// const DeliveryFee = styled(ProductName)``;

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
    setProducts(result.data[0][0]);
    // setProducts(result.data.map((el) => el[0]));
  };

  return (
    <CartCont>
      <CartHeader />
      <CartItem />
      <OrderBtn>상품 주문 하기</OrderBtn>
      {/* <CartCont key={products && products.id}>
        <ProductImg src={products && products.path} />
        <div>
          <ProductName>{products && products.product_name}</ProductName>
          <ProductPrice>{products && products.product_price}</ProductPrice>
          <DeliveryFee>{products && products.delivery_price}</DeliveryFee>
        </div>
        <Counter cart={products && products.product_price} />
        <div>
          <p>상품총금액</p>
          <button>주문하기</button>
        </div>
      </CartCont> */}
      {/* {products &&
        products.map((data) => {
          return (
            <CartCont key={data[0].id}>
              <ProductImg src={data[0].path} />
              <div>
                <ProductName>{data[0].product_name}</ProductName>
                <ProductPrice>{data[0].product_price}</ProductPrice>
                <DeliveryFee>{data[0].delivery_price}</DeliveryFee>
              </div>
              <Counter test={data[0].product_price} />
              <div>
                <p>상품총금액</p>
                <button>주문하기</button>
              </div>
            </CartCont>
          );
        })} */}
    </CartCont>
  );
}
