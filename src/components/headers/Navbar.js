import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="">
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/login">Đăng ký/Đăng nhập</a>
              </li>
              <li>
                <a href="/cart">Giỏ hàng</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
