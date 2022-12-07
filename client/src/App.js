import React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductsDetailPage/ProductDetail";
import NotFound from "./components/NotFound";
import Login from "./pages/LoginPage/Login";
import Cart from "./pages/CartPage/Cart";

export default function App() {
  return (
    <>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/product/detail/:productId"
              element={<ProductDetail />}
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// https://velog.io/@zzi99/react-router-dom-%EC%82%AC%EC%9A%A9%ED%95%A0-%EB%95%8C-%ED%8A%B9%EC%A0%95-%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90%EC%84%9C%EB%A7%8C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8HeaderFooterNav-%EB%93%B1-%EB%B3%B4%EC%97%AC%EC%A3%BC%EA%B8%B0
