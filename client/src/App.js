import React, { Suspense, lazy } from "react";
import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MainLayout = lazy(() => import("./Layouts/MainLayout"));
const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./pages/ProductsDetailPage"));
const Login = lazy(() => import("./pages/LoginPage/Login"));
const Cart = lazy(() => import("./pages/CartPage"));
const NotFound = lazy(() => import("./pages/Error/NotFound"));

export default function App() {
  return (
    <>
      <Reset />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route
                path="/product/detail/:productId"
                element={<ProductDetail />}
              />
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

// https://velog.io/@zzi99/react-router-dom-%EC%82%AC%EC%9A%A9%ED%95%A0-%EB%95%8C-%ED%8A%B9%EC%A0%95-%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90%EC%84%9C%EB%A7%8C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8HeaderFooterNav-%EB%93%B1-%EB%B3%B4%EC%97%AC%EC%A3%BC%EA%B8%B0
