import React from "react";
import styled from "styled-components";

import MainImg from "./components/MainImg";
import Information from "./components/Information";
import Detail from "./components/Detail";

const Cont = styled.div`
  height: 100vh;
  margin: 0 auto;
  padding: 100px 0 0 0;
`;

const Inner = styled.div`
  width: 62%;
  margin: 0 auto;
`;

const Wrap = styled.div`
  height: 60%;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  column-gap: 100px;
  margin: 0 0 100px 0;
`;

export default function ProductDetail() {
  return (
    <Cont>
      <Inner>
        <Wrap>
          <MainImg />
          <Information />
        </Wrap>
        <Detail />
      </Inner>
    </Cont>
  );
}
