import React from "react";
import styled from "styled-components";

const RemoveBtn = styled.p`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export default function RemoveItemBtn(props) {
  const productId = JSON.parse(localStorage.getItem("productId"));

  const removeItemHandle = async () => {
    const itemFilter = productId.filter((id) => id != props.productId);
    localStorage.setItem("productId", JSON.stringify(itemFilter));
  };

  return <RemoveBtn onClick={removeItemHandle}>X</RemoveBtn>;
}
