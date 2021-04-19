import React, { Component } from 'react'
import Footer from '../footer/Footer'
import Header from './Header'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Formik } from "formik";
import * as EmailValidator from "react-email-validator";
import * as Yup from "yup";

const Login = () => (

    <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert("Đăng nhập thành công", values);
                setSubmitting(false);
            }, 500);
        }}

        validationSchema={Yup.object().shape({
            email: Yup.string()
                .trim("Sai tên đăng nhập")
                .required("Mời nhập thông tin đăng nhập"),
            password: Yup.string()
                .required("Không được để trống password.")
                .min(8, "Mật khẩu quá ngắn")
        })}
    >

        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleSubmit
            } = props;
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
                                    <form className="login-form" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-item">
                                                <input type="text" placeholder="Username/Email" className="form-control"
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}></input>
                                                {errors.email && touched.email && (
                                                    <div className="input-feedback">{errors.email}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-item">
                                                <input type="password" placeholder="Password" className="form-control"
                                                    name="password"
                                                    value={values.password}
                                                    onChange={handleChange}></input>
                                                {errors.password && touched.password && (
                                                    <div className="input-feedback">{errors.password}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 form-item">
                                                <input type="checkbox" className="remember-me" /> Nhớ mật khẩu
                                        </div>
                                        </div>
                                        <div className="form-group">
                                            <button disabled={isSubmitting} type="submit" className="btn btn-primary" id="login" >Đăng nhập</button>
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
                    </section>
                    <Footer />

                </div>
            )
        }}
    </Formik>
);
export default Login;