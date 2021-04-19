import React, { Component } from 'react'
import logo from "../../img/logo-removebg-preview.png"
import Btn from '../Button'
import Banner from './banner';
import { Link } from 'react-router-dom'

export default class Container extends Component {
    render() {
        return (
            <div >
                <Banner />
                <div className="flex-container-main">
                    <div id="intro">
                        <img src={logo} height={150} width={150} />
                        <strong><h2>ĂN GÌ HÔM NAY ?</h2></strong>
                        <br />
                        <p>Thực đơn JaJa Chicken đa dạng và phong phú, có rất nhiều sự lựa chọn cho bạn, gia đình và bạn bè.</p>
                    </div>
                    <div className="main-item">
                        <img SRC="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/97061210_126079062417344_3345803377832361984_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=nGs0mZgoRE4AX8UpRfO&_nc_ht=scontent.fhan2-1.fna&oh=505fcc8dd0eff7d4c73d730c5e9ba6f2&oe=60986108" />
                        <div>
                            <h3>Gà rán truyền thống</h3>
                            <br />
                            <Btn />
                        </div>
                    </div>
                    <div className="main-item"><img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/100768305_134463644912219_1757756979826130944_n.png?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=RnHpGnLrpHUAX-eRWU6&_nc_ht=scontent.fhan2-4.fna&oh=1d2faab0214d5a0bfa3f6c85ccf1a6b3&oe=6099BE66" />
                        <div>
                            <h3>Gà sốt cay</h3>
                            <br />
                            <Btn />
                        </div>
                    </div>
                    <div className="main-item"><img src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.6435-9/96243271_126078825750701_1498279601539907584_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_ohc=1TK2WDmHqAoAX9I9AcU&_nc_ht=scontent.fhan2-6.fna&oh=f90bdb6a0296b24541aad7a946999561&oe=609959F6" />
                        <div>
                            <h3>Món gia đình</h3>
                            <br />
                            <Btn />
                        </div>
                    </div>
                    <div className="main-item"><img src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/97137079_126078799084037_4541802197532278784_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=MnsxxdQaPHEAX_8jnUt&_nc_ht=scontent.fhan2-1.fna&oh=484bee4e13a9a29fa24838d4dd90a06b&oe=6099687E" />
                        <div>
                            <h3>Món tráng miệng</h3>
                            <br />
                            <Btn />
                        </div>
                    </div>

                </div>
                <div className="container-service">
                    <strong><h2>DỊCH VỤ</h2></strong>
                    <h4>TẬN HƯỞNG NHỮNG KHOẢNH KHẮC ĐẶC BIỆT CÙNG JAJA</h4>
                    <div className="flex-container-service">
                        <div className="service-item">
                            <Link to="/service">
                                <img src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.6435-9/116155232_155983389426911_2140389135248403351_n.png?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=iiD2jAmboDMAX-mUn04&_nc_ht=scontent.fhan2-6.fna&oh=2abf9d423014f0e89b8403f41903db17&oe=6097BC6B" />
                                <h3>ĐẠI TIỆC SINH NHẬT</h3>
                            </Link>
                        </div>
                        <div className="service-item">
                            <Link to="/service">
                                <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/107271420_149135750111675_2290895710379073678_n.png?_nc_cat=108&ccb=1-3&_nc_sid=e3f864&_nc_ohc=BYLZUmyZTx4AX_WmGME&_nc_oc=AQksIO0mWtgiW1MhVqlio6QFH3HX9Hlb6_c8kw99QPV2E9rV9U2nYKtOPBDaluydUJ8&_nc_ht=scontent.fhan2-3.fna&oh=bb0d328c4a0d05d609afaeb8772caec8&oe=60967A03" />
                                <h3>ĐỒNG HÀNH MÙA TỔNG KẾT</h3>
                            </Link>
                        </div>
                        <div className="service-item">
                            <Link to="/service">
                                <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/83063677_133306271694623_5842593151193186304_n.png?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=Q9uTyGYrqpEAX_K6z1V&_nc_ht=scontent.fhan2-4.fna&oh=cee21168f4dcdbb7fa8746a3fbffc4c0&oe=6098E24B" />
                                <h3> QUỐC TẾ THIẾU NHI </h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container-news">
                    <h2>TIN TỨC</h2>

                    <div className="flex-container-news">
                        <Link>
                            <div className="news-item">
                                <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/118464744_164864545205462_3013913295243705682_n.png?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=58KNnK3PlaoAX9TOaHf&_nc_ht=scontent.fhan2-4.fna&oh=431c7cad27095ef77b6cde1d60836fde&oe=60984C57" />
                            </div>
                        </Link>
                        <Link>
                            <div className="news-item">
                                <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/104415367_140258964332687_5028199830337772197_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=1gtk38zzEHwAX9FiCIV&_nc_ht=scontent.fhan2-4.fna&oh=8f0bbb2740eeb1bef40d019373653b12&oe=60977251" />
                            </div>
                        </Link>
                        <Link>
                            <div className="news-item">
                                <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/97960680_125548415803742_9091850616308760576_n.png?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=8Bv6hm5QBUsAX80bzOb&_nc_ht=scontent.fhan2-3.fna&oh=03f8ef7ee98ae88172d1b2a989e54dbb&oe=6099D930" />
                            </div>
                        </Link>
                        <Link>
                            <div className="news-item">
                                <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/110227179_155983402760243_4926401940915098651_n.png?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_ohc=iK4a8mM4ajEAX9wGXm4&_nc_ht=scontent.fhan2-3.fna&oh=efda2aff1f84be8ed5703cc7f6d3b8a5&oe=609A3DAB" />
                            </div>
                        </Link>




                    </div>

                </div>
            </div>
        )
    }
}
