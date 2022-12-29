import React, { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import axios from "axios";

export default function RemoveItemBtn(props) {
  const productId = props.productId;
  const userId = window.sessionStorage.getItem("userId");

  const remove = async (e) => {
    const url = "/api/product/cartListDelete";
    const val = [e.target.id, userId];
    try {
      const result = await axios.delete(url, {
        data: {
          val: val,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BiX
      onClick={remove}
      size="24px"
      padding="20px 20px"
      cursor="pointer"
      id={productId}
    />
  );
}
