import React, { Component } from 'react';
import logo from "../../img/logo-removebg-preview.png";
import logo2 from "../../img/login_n.png";

export class Footer extends Component {
    render() {
        return (
            <div>
                <>
                    {/*Footer */}
                    <div className="col-md-12 col-sm-12 col-md-12 col-lg-12 footer-box">

                        <div className="row">

                            <div className="col-md-4 col-sm-4 col-md-4 col-lg-4">
                                <a href="/">
                                    <img className="img-reponsive" src={logo} height={195} width={250} />
                                </a>
                                <hr />
                                <h3><strong>JAJA</strong> Chicken</h3>
                            </div>
                            <div className="col-md-4 col-sm-4 col-md-4 col-lg-4">
                                <strong>Địa chỉ shop</strong>
                                <hr />
                                <p>
                                    Thôn Mỹ Cầu - xã Tân Mỹ ,<br />
                                    Tp. Bắc Giang, Tỉnh Bắc Giang<br />
                                    Call: +84 0383766181<br />
                                    Email: hoangloi.sumida@gmail.com<br />
                                </p>
                                <hr />
                                <p>Hộp thư góp ý: haibg1998b@gmail.com</p>
                            </div>
                            <div className="col-md-4 col-sm-4 col-md-4 col-lg-4">
                                <img className="img-reponsive" src={logo2} height={300} width={300} />
                            </div>
                            <div className="col-md-4  col-sm-4 col-md-4 col-lg-4 social-box">
                                <strong> Liên hệ với chúng tôi </strong>
                                <hr />
                                <a href="https://www.facebook.com/JaJaChickenVietnam"><i className="fa fa-facebook-square fa-3x " /></a>
                                <a href="#"><i className="fa fa-twitter-square fa-3x " /></a>
                                <a href="https://mail.google.com/mail/u/0/#sent"><i className="fa fa-google-plus-square fa-3x c" /></a>
                                <p>
                                    Hãy tận hưởng cuộc sống của bạn cùng với hương vị độc đáo của JAJA Chicken đến từ Nhật Bản
                                </p>
                                <hr />
                                <p>Made by HoangMinhHai-61Pm2</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </>
            </div>
        )
    }
}

export default Footer
