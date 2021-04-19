import React, { Component } from 'react';
import logo from "../../img/logo-removebg-preview.png";
import { Link } from 'react-router-dom';

export default class Logo extends Component {
    render() {
        return (
            <div className="">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/"> <img src={logo} /></a>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <ul className="nav navbar-nav navbar-center">
                        <li><a href="/">TRANG CHỦ</a></li>
                        <li><a href="/menu">THỰC ĐƠN</a></li>
                        <li><a href="/promotion">KHUYẾN MÃI</a></li>
                        <li><a href="/service">DỊCH VỤ</a></li>
                        <li><a href="/feedback">PHẢN HỒI</a></li>
                        <li><a href="/news">THÔNG TIN LIÊN HỆ</a></li>

                    </ul>
                </div>
            


            </div>
        )
    }
}
