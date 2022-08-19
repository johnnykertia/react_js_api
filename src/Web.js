import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import First from "./components/pages/HomePage/First";
import { Home, Sukses } from "./pages/indes"
import Navbar from "./components/pages/Navbar";
import Products from "./components/Product/Product";
import Services from "./components/Service/Service";
import SignUp from "./components/SignUp/SignUp";

export default class Web extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<First />}></Route>
            <Route path="/service" element={<Services/>}></Route>
            <Route path="/product" element={<Home />}></Route>
            <Route path="/sukses" element={<Sukses/>}></Route>
            <Route path="/sign-up" element={<SignUp/>}></Route>
          </Routes>
          <Footer/>
      </BrowserRouter>
      </div>
    );
  }
}
