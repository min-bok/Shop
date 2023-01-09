import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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

export default function Information() {
  const { productId } = useParams();
  const [info, setInfo] = useState();

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const url = "/api/product/productDetail";

    try {
      const result = await axios.get(url, {
        params: {
          val: productId,
        },
      });

      setInfo(result.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {info &&
        info.map((data) => {
          return (
            <Cont key={data.id}>
              <Name>{data.product_name}</Name>
              <Price>{data.product_price.toLocaleString("ko-KR")}원</Price>
              <div>
                <Delivery>
                  배송비 {data.delivery_price.toLocaleString("ko-KR")}원 /
                  도서산간(제주도) 배송비 추가
                  {data.add_delivery_price.toLocaleString("ko-KR")}원
                </Delivery>
                <OutboundDays>
                  {data.outbound_days}일 이내 출고 (주말, 공휴일 제외)
                </OutboundDays>
              </div>
              <Counter />
              <PrintBtn />
            </Cont>
          );
        })}
    </>
  );
}
