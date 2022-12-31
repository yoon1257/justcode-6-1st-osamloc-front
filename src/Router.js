import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 레이아웃
import LayOut from "./components/LayOut";

// 메인 페이지
import Main from "./pages/Main/index";

// 로그인, 회원가입 페이지
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

// 제품 카테고리
import TeaSet from "./pages/Products";
// 제품 카테고리 - 베스트
import WeeklyBest from "./pages/Products/WeeklyBest";
import Best from "./pages/Products/WeeklyBest/Best";
// 제품 카테고리 - 티 제품
import BlackTea from "./pages/Products/TeaProduct/BlackTea";
import BlendedTea from "./pages/Products/TeaProduct/BlendedTea";
import GreatTea from "./pages/Products/TeaProduct/GreatTea";
import GreenTea from "./pages/Products/TeaProduct/GreenTea";
import HerbTea from "./pages/Products/TeaProduct/HerbTea";
import MilkTea from "./pages/Products/TeaProduct/MilkTea";
// 제품 카테고리 - 티 푸드

// 제품 상세 페이지
import ProductDetail from "./components/ProductDetail";

// 장바구니, 결제 페이지
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Cart/Payment";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 페이지 */}
        <Route
          path="/"
          element={
            <LayOut>
              <Main />
            </LayOut>
          }
        />

        {/* 로그인, 회원가입 페이지 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 제품 카테고리 */}
        <Route
          path="/products"
          element={
            <LayOut>
              <TeaSet />
            </LayOut>
          }
        />

        {/* 제품 카테고리 - 베스트 */}
        <Route
          path="/products/weeklybest"
          element={
            <LayOut>
              <WeeklyBest />
            </LayOut>
          }
        />
        <Route
          path="/products/weeklybest/best"
          element={
            <LayOut>
              <Best />
            </LayOut>
          }
        />

        {/* 제품 카테고리 - 티 제품 */}
        <Route
          path="/products/blacktea"
          element={
            <LayOut>
              <BlackTea />
            </LayOut>
          }
        />
        <Route
          path="/products/blendedtea"
          element={
            <LayOut>
              <BlendedTea />
            </LayOut>
          }
        />
        <Route
          path="/products/greattea"
          element={
            <LayOut>
              <GreatTea />
            </LayOut>
          }
        />
        <Route
          path="/products/greentea"
          element={
            <LayOut>
              <GreenTea />
            </LayOut>
          }
        />
        <Route
          path="/products/herbtea"
          element={
            <LayOut>
              <HerbTea />
            </LayOut>
          }
        />
        <Route
          path="/products/milktea"
          element={
            <LayOut>
              <MilkTea />
            </LayOut>
          }
        />

        {/* 제품 상세 페이지 */}
        <Route
          path="/products/item/:id"
          element={
            <LayOut>
              <ProductDetail />
            </LayOut>
          }
        />

        {/* 장바구니, 결제 페이지 */}
        <Route
          path="/cart"
          element={
            <LayOut>
              <Cart />
            </LayOut>
          }
        />
        <Route
          path="/payment/:cartlist"
          element={
            <LayOut>
              <Payment />
            </LayOut>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
