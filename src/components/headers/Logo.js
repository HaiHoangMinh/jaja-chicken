import React, { Component } from 'react';
import logo from "../../img/logo-removebg-preview.png";
import { Link } from 'react-router-dom';

export default class Logo extends Component {
    render() {
        return (
            <div className="header header-search">
                <a className="navbar-brand" href="/"> <img src={logo} height={180} width={180} /><strong>JAJA</strong> Chicken</a>
                <form className="navbar-form navbar-center" role="search">
                    <div className="form-group">
                        <input type="text" placeholder="Search" className="form-control" id="search" />
                    </div>
                    <Link to="/search">
                        <button type="submit" className="btn btn-primary" >Search</button>
                    </Link>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-center">
                            <li><a href="/">TRANG CHỦ</a></li>
                            <li><a href="/menu">THỰC ĐƠN</a></li>
                            <li><a href="/promotion">KHUYẾN MÃI</a></li>
                            <li><a href="/service">DỊCH VỤ</a></li>
                            <li><a href="/feedback">PHẢN HỒI</a></li>
                            <li><a href="/feedback">TIN TỨC</a></li>

                        </ul>
                    </div>
                </form>

            </div>
        )
    }
}
