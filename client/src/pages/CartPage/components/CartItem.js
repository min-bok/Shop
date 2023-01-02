import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import RemoveBtn from "./RemoveBtn";
import CartHeader from "./CartHeader";
import OrderBtn from "./OrderBtn";
import NullCart from "./NullCart";

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
  const userId = window.sessionStorage.getItem("userId");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCartData();
  }, [products]);

  const getCartData = async () => {
    try {
      const result = await axios.post(url, {
        data: {
          val: userId,
        },
      });
      setProducts(result.data[0]);
    } catch (err) {
      if (err.response.status === 401) {
        window.location.href = "/login";
      }
      console.log(err);
    }
  };

  return (
    <>
      <CartHeader products={products} />
      <>
        {products[0] ? (
          products.map((data) => {
            return (
              <Cont key={data.id}>
                <ProductImg src={data.path} />
                <TextWrap>
                  <ProductName>{data.product_name}</ProductName>
                  <Brand>
                    개당 {data.product_price.toLocaleString("ko-KR")}원
                  </Brand>
                  <Delivery>
                    택배배송 / {data.delivery_price.toLocaleString("ko-KR")}
                  </Delivery>
                </TextWrap>

                <QuantityWrap>
                  <QuantityText>수량</QuantityText>
                  <QuantityNum>{data[`SUM(t2.product_quantity)`]}</QuantityNum>
                </QuantityWrap>

                <PriceWrap>
                  <RemoveBtn productId={data.id} />
                  <TotalPrice>
                    {(
                      data[`SUM(t2.product_quantity)`] * data.product_price
                    ).toLocaleString("ko-KR")}
                    원
                  </TotalPrice>
                </PriceWrap>
              </Cont>
            );
          })
        ) : (
          // 장바구니에 상품이 존재하지 않는 경우
          <NullCart />
        )}
      </>
      <OrderBtn products={products} />
    </>
  );
}
