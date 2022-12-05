import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function ProductDetail() {
  const { id } = useParams();
  return <p>{id}번째 상품의 상세페이지 입니다</p>;
}
