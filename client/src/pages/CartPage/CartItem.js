import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import RemoveItemBtn from "./RemoveItemBtn";
import CartHeader from "./CartHeader";

const Cont = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: auto;
  padding: 30px 0;
  border: 0.75px solid #f2f2f2;
  border-left: none;
  border-right: none;
  align-items: center;
  justify-content: space-between;
`;

const ProductImg = styled.img`
  width: 200px;
  height: 150px;
  background-color: #f2f2f2;
  object-fit: cover;
`;

const ProductName = styled.p`
  font-size: 21px;
  font-weight: 700;
`;

const Brand = styled(ProductName)`
  font-size: 16px;
  font-weight: 400;
  color: gray;
`;

const Delivery = styled(ProductName)`
  font-size: 14px;
  font-weight: 400;
  color: lightgray;
`;

const QuantityWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuantityText = styled(Delivery)``;

const QuantityNum = styled.span`
  font-size: 18px;
  border: 1px solid lightgray;
  padding: 5px 8px;
  margin: 0 0 0 10px;
`;

const TotalPrice = styled(ProductName)``;

const PriceWrap = styled(QuantityWrap)`
  box-sizing: border-box;
  height: 150px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 25px 0;
`;

const TextWrap = styled(PriceWrap)`
  padding: 0;
  height: 100px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export default function CartItem() {
  const url = "/api/product/cartList";
  const productId = JSON.parse(localStorage.getItem("productId"));
  const [products, setProducts] = useState([]);

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

  // 수량 받아와서 가격 계산하기
  // 상품 주문하기 버튼 기능 추가하기
  // 살품이 하나도 존재하지않는 경우 만들기

  return (
    <>
      <CartHeader itemQuantity={products && products.length} />
      {products &&
        products.map((data) => {
          return (
            <Cont key={data[0].id}>
              <ProductImg src={data[0].path} />
              <TextWrap>
                <ProductName>{data[0].product_name}</ProductName>
                <Brand>
                  개당 {data[0].product_price.toLocaleString("ko-KR")}원
                </Brand>
                <Delivery>
                  택배배송 / {data[0].delivery_price.toLocaleString("ko-KR")}
                </Delivery>
              </TextWrap>

              <QuantityWrap>
                <QuantityText>수량</QuantityText>
                <QuantityNum>4</QuantityNum>
              </QuantityWrap>

              <PriceWrap>
                <RemoveItemBtn productId={data[0].id} />
                <TotalPrice>
                  \ {data[0].product_price.toLocaleString("ko-KR")}원
                </TotalPrice>
              </PriceWrap>
            </Cont>
          );
        })}
    </>
  );
}
