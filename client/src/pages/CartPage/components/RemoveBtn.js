import React, { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import axios from "axios";

export default function RemoveItemBtn(props) {
  const productId = props.productId;
  const userId = 98;
  const [removeId, setRemoveId] = useState(0);

  const remove = async (e) => {
    setRemoveId(e.target.id);
    const url = "/api/product/cartListDelete";
    const val = [removeId, userId];
    try {
      const result = await axios.delete(url, {
        data: {
          val: val,
        },
      });

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(removeId);

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
