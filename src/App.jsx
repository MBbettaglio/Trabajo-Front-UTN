import React from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import { CartPage, ContactPage, DetailPage, HomePage } from "./screens";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Tp-Utn-Front" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
      <hr />
      <hr />
      <Footer />{" "}
    </>
  );
};

export default App;
