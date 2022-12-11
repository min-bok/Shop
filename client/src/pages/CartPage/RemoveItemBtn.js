import React from "react";
import styled from "styled-components";
import axios from "axios";

const RemoveBtn = styled.p`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export default function RemoveItemBtn(props) {
  const productId = props.productId;

  const removeItemHandle = async () => {
    const url = "/api/product/cartList";

    try {
      const result = await axios.delete(url, {
        data: {
          productId,
        },
      });

      // 리로드 없이 화면 재렌더링하는 방법은 없나?
      // 삭제 버튼 누르면 일단 클라이언트에서만 삭제하고
      // 상품주문창으로 넘어갈때 db로 보내면 해결되지 않을까
      window.location.reload();
      return result;
    } catch (err) {
      console.log(err);
    }
  };

  return <RemoveBtn onClick={removeItemHandle}>X</RemoveBtn>;
}
