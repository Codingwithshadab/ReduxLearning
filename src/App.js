import HomeComp from "./components/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/css/custom.css";
import Header from "./components/header/Header";

import React from "react";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./assets/store";
import ProductDetailPage from "./pages/product-detail";
import MoviesPage from "./pages/movies";
import LoginPage from "./pages/login";
import { useState } from "react";
import ProfilePage from "./pages/profile";
import QuizPage from "./pages/quiz";
import TodoPage from "./pages/todo";
import ContactListPage from "./pages/contact-list";
import WeatherPage from "./pages/weather";
const isLogin = JSON.parse(localStorage.getItem("isLogin"));

function App() {
  const [common, setCommon] = useState(true);
  return (
    <>
      <Provider store={store}>
        {common && <Header />}
        <Routes>
          <Route path="/" element={<HomePage setCommon={setCommon} />} />

          <Route
            path="/movies"
            element={<MoviesPage setCommon={setCommon} />}
          />
          <Route
            path="/product-detail/:id"
            element={<ProductDetailPage setCommon={setCommon} />}
          />
          <Route path="/cart" element={<CartPage setCommon={setCommon} />} />
          <Route
            path="/profile"
            element={<ProfilePage setCommon={setCommon} />}
          />
          <Route path="/quiz" element={<QuizPage setCommon={setCommon} />} />
          <Route path="/login" element={<LoginPage setCommon={setCommon} />} />
          <Route path="/todo" element={<TodoPage setCommon={setCommon} />} />
          <Route path="/contact-list" element={<ContactListPage setCommon={setCommon} />} />
          <Route path="/interview" element={<WeatherPage setCommon={setCommon} />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
