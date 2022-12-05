import React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductsDetail/ProductDetail";

function App() {
  return (
    <>
      <Reset />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product/detail/:productId"
            element={<ProductDetail />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
