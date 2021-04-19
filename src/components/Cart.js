import React, { Component } from "react";
import Footer from "./footer/Footer";
import Header from "./headers/Header";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Giỏ hàng</h1>
        <Footer />
      </div>
    );
  }
}
