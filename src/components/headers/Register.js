import React, { Component } from "react";
import Footer from "../footer/Footer";
import Header from "./Header";
import Logo from "./Logo";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      password: "",
      repassword: "",
      address: "",
      isChecked: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
  }
  register() {
    if (this.state.fullname == "") {
      alert("Không được để trống Họ và Tên");
    } else if (this.state.email == "") {
      alert("Không được để trống Username/Email");
    } else if (this.state.password == "") {
      alert("Không được để trống Password");
    } else if (this.state.repassword == "") {
      alert("Không được để trống repassword");
    } else if (this.state.address == "") {
      alert("Không được để trống địa chỉ");
    } else if (this.state.repassword != this.state.password) {
      alert("Mật khẩu nhập lại không trùng khớp với password");
    } else if (this.state.isChecked === false) {
      alert("Bạn phải đồng ý với các điều khoản");
    } else {
      axios({
        method: "post",
        url: "http://localhost:4000/users",
        data: {
          fullname: this.state.fullname,
          email: this.state.email,
          password: this.state.password,
          address: this.state.address,
        },
      })
        .then(function (response) {
          alert(
            "User:" +
              this.state.fullname +
              "Username/Email " +
              this.state.email +
              " Address" +
              this.state.address
          );
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  render() {
    const {
      fullname,
      email,
      password,
      repassword,
      address,
      isChecked,
    } = this.state;
    return (
      <div>
        <Header />
        <section className="section-register">
          <div className="col-xs-2 col-sm-3 col-md-3 col-lg-4"></div>
          <div
            className="col-xs-8 col-sm-6 col-md-6 col-lg-4 form-background "
            id="register"
          >
            <h3>
              <strong>ĐĂNG KÝ TÀI KHOẢN</strong>
            </h3>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                <form className="register-form" encType="multipart/form-data">
                  <div className="form-group">
                    <label>Họ và Tên (*)</label>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-item">
                      <input
                        type="text"
                        placeholder="Fullname"
                        className="form-control"
                        name="fullname"
                        value={fullname}
                        onChange={this.handleChange}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Tên đăng nhập/Email (*)</label>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-item">
                      <input
                        type="text"
                        placeholder="Username/Email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Mật khẩu (*)</label>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-item">
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Nhập lại mật khẩu (*)</label>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-item">
                      <input
                        type="password"
                        placeholder="Re-Password"
                        className="form-control"
                        name="repassword"
                        value={repassword}
                        onChange={this.handleChange}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Địa chỉ nhận hàng: (*)</label>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-item">
                      <input
                        type="text"
                        placeholder="Address"
                        className="form-control"
                        name="address"
                        value={address}
                        onChange={this.handleChange}
                        required
                      ></input>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    name="isChecked"
                    value={isChecked}
                    onChange={this.handleChange}
                  />
                  <span>Tôi đồng ý với các điều khoản của cửa hàng</span>
                  <br />
                  <div className="form-group">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-item">
                      <button
                        onClick={this.register}
                        type="submit"
                        className="btn btn-primary"
                        id="login-register-btn"
                      >
                        Đăng ký
                      </button>
                    </div>
                  </div>
                  <div className="form-group">
                    <div
                      className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-item"
                      id="register-link"
                    >
                      <br /> Bạn đã có tài khoản .
                      <Link to="/login">
                        <a> Đăng nhập ngay</a>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
}
