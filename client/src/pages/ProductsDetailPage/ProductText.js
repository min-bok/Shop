import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Counter from "../../components/Counter";

const ProductCont = styled.div`
  background-color: pink;
`;

const ProductName = styled.p`
  font-size: 18px;
`;

const ProductPrice = styled(ProductName)`
  font-weight: 700;
`;

const AboutDelivery = styled(ProductName)`
  font-size: 16px;
  color: #767676;
`;

const OutboundDays = styled(AboutDelivery)``;

const BtnWrap = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1.2fr;
  column-gap: 14px;
`;

const TakeBtn = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 5px;
  background-color: aqua;
`;
const CartBtn = styled(TakeBtn)``;

export default function ProductText(props) {
  const [productIdArr, setProductIdArr] = useState([]);
  const set = new Set(productIdArr);

  useEffect(() => {
    setProductIdArr([props.data.id, ...productIdArr]);
  }, []);

  const resultArr = [...set];

  const saveAtCart = async () => {
    localStorage.setItem("productId", JSON.stringify(resultArr));
  };

  return (
    <ProductCont key={props.data.id}>
      <ProductName>{props.data.product_name}</ProductName>
      <ProductPrice>
        {props.data.product_price.toLocaleString("ko-KR")}원
      </ProductPrice>
      <AboutDelivery>
        배송비 {props.data.delivery_price.toLocaleString("ko-KR")}원 /
        도서산간(제주도) 배송비 추가
        {props.data.add_delivery_price.toLocaleString("ko-KR")}원
      </AboutDelivery>
      <OutboundDays>
        {props.data.outbound_days}일 이내 출고 (주말, 공휴일 제외)
      </OutboundDays>
      <Counter price={props.data.product_price} />

      <BtnWrap>
        <TakeBtn>바로 구매</TakeBtn>
        <Link to={`/cart`}>
          <CartBtn onClick={saveAtCart}>장바구니</CartBtn>
        </Link>
      </BtnWrap>
    </ProductCont>
  );
}
