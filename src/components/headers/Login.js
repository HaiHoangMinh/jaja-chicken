import React, { Component } from 'react'
import Footer from '../footer/Footer'
import Header from './Header'
import Logo from './Logo'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Header />
                <section className="section-login">
                    <div className="col-xs-2 col-sm-3 col-md-3 col-lg-4">

                    </div>
                    <div className="col-xs-8 col-sm-6 col-md-6 col-lg-4 form-background">
                        <h3><strong>ĐĂNG NHẬP</strong></h3>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="row">
                                <form className="login-form" method="POST">
                                    <div className="form-group">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-item">
                                            <input type="text" placeholder="Username/Email" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-item">
                                            <input type="password" placeholder="Password" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-item">
                                            <input type="checkbox" className="remember-me" /> Nhớ mật khẩu
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <Link to="/search">
                                            <button type="submit" className="btn btn-primary" id="login" >Đăng nhập</button>
                                        </Link>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-item" >
                                            <br /> Bạn chưa có tài khoản ?
                                            <Link to="/register">
                                                <a>   Đăng ký ngay</a>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-2 col-sm-3 col-md-3 col-lg-4">

                    </div>
                    <div className="col-xs-2 col-sm-3 col-md-3 col-lg-4">

                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}
