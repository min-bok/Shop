import React from "react";
import styled from "styled-components";
import Counter from "../../../components/Counter";
import PrintBtn from "./PrintBtn";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.p`
  font-size: 28px;
  font-weight: 700;
`;
const Price = styled(Name)``;

const Delivery = styled.p`
  color: #7f7f7f;
  margin: 0 0 15px 0;
`;
const OutboundDays = styled(Delivery)``;

export default function Information(props) {
  return (
    <Cont key={props.data.id}>
      <Name>{props.data.product_name}</Name>
      <Price>{props.data.product_price.toLocaleString("ko-KR")}원</Price>
      <div>
        <Delivery>
          배송비 {props.data.delivery_price.toLocaleString("ko-KR")}원 /
          도서산간(제주도) 배송비 추가
          {props.data.add_delivery_price.toLocaleString("ko-KR")}원
        </Delivery>
        <OutboundDays>
          {props.data.outbound_days}일 이내 출고 (주말, 공휴일 제외)
        </OutboundDays>
      </div>
      <Counter />
      <PrintBtn />
    </Cont>
  );
}
