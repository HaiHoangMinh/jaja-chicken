import React, { Component } from "react";
import Footer from "../footer/Footer";
import Header from "./Header";
import Logo from "./Logo";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }
  signIn() {
    if (this.state.email == "") {
      alert("Không được để trống Username/Emaul");
    } else if (this.state.password == "") {
      alert("Không được để trống Password");
    } else {
      axios({
        method: "post",
        url: "http://localhost:4000/users",
        data: {
          email: this.state.email,
          password: this.state.password,
        }
          .then(function (response) {})
          .catch(function (error) {
            console.log(error);
          }),
      });
    }
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  render() {
    return (
      <div>
        <Header />
        <section className="section-login">
          <div className="col-xs-2 col-sm-3 col-md-3 col-lg-4"></div>
          <div className="col-xs-8 col-sm-6 col-md-6 col-lg-4 form-background">
            <h3>
              <strong>ĐĂNG NHẬP</strong>
            </h3>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                <form className="login-form">
                  <div className="form-group">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-item">
                      <input
                        type="text"
                        placeholder="Username/Email"
                        className="form-control"
                        onChange={this.handleEmailChange}
                        required
                        autofocus
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-item">
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        onChange={this.handlePasswordChange}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-item">
                      <input type="checkbox" className="remember-me" /> Nhớ mật
                      khẩu
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      id="login"
                      onClick={this.signIn}
                    >
                      Đăng nhập
                    </button>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-item">
                      <br /> Bạn chưa có tài khoản ?
                      <Link to="/register">
                        <a> Đăng ký ngay</a>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xs-2 col-sm-3 col-md-3 col-lg-4"></div>
          <div className="col-xs-2 col-sm-3 col-md-3 col-lg-4"></div>
        </section>

        <Footer />
      </div>
    );
  }
}
