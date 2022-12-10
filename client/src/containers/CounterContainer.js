import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../modules/counter";

export default function CounterContainer() {
  const quantity = useSelector((state) => state.counter.quantity);

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  return (
    <Counter
      quantity={quantity}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
}
