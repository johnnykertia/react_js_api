import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./components";
import { Home, Sukses } from "./pages/indes"

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sukses" element={<Sukses/>}></Route>
          </Routes>
      </BrowserRouter>
      </div>
    );
  }
}
