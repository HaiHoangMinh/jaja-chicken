import React, { Component } from 'react'
import Header from './headers/Header'
import Footer from './footer/Footer'
import { Link } from 'react-router-dom'

export default class Promotion extends Component {
    render() {
        return (
            <div className="promotion">
                <Header />
                <section className="promotion-banner">
                    <h1>Khuyến Mãi</h1>
                    <img src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/93575933_102035318155052_898436592010526720_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=ckKSXRnCuiEAX83mIc8&_nc_ht=scontent.fhan2-1.fna&oh=8d83bc2ac30be9541a0b423235adb319&oe=6099011B" />
                </section>
                <div className="promotion-items">
                    <div>
                        <Link to="https://www.facebook.com/permalink.php?story_fbid=102068138151770&id=101908178167766">
                            <div className="promotion-item">
                                <img src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/93578388_102060134819237_302731869370187776_n.png?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=oyS5aDyFDnEAX_m3Ylb&_nc_ht=scontent.fhan2-2.fna&oh=ef2a9b964959eab2c2bf1bc3a8f3a1d1&oe=609A9B86" />
                                <h3>MUA 1 TẶNG 2 </h3>
                                <p>Mua 𝟭 xuất size M tặng 𝟭 đùi/cánh + 𝟭 SALAD Potato Mini
                            Mua 𝟭 GÀ size S tặng 𝟭 SALAD Potato Mini  🛵 𝗙𝗥𝗘𝗘𝗦𝗛𝗜𝗣 TẬN NHÀ</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="https://www.facebook.com/101908178167766/photos/a.102068118151772/132974545061129/">
                            <div className="promotion-item">
                                <img src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.6435-9/101217392_132974548394462_4316409619577569280_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=Kf42OoF-Cu0AX8bt1DZ&_nc_ht=scontent.fhan2-6.fna&oh=b41b62fde95711bfb6556e66099acf1c&oe=6098EA5A" />
                                <h3>ĂN GÀ MIỄN PHÍ</h3>
                                <p>Tặng miễn phí SIÊU PHẨM bán chạy nhà 𝗝𝗔𝗝𝗔
                                GÀ BÍT-TẾT SỐT CHUA NGỌT NANBAN MINI
                                <br /><strong>✔️ Áp dụng cho hoá đơn từ 99k</strong> </p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="#">
                            <div className="promotion-item">
                                <img src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/95840466_120666746291909_4176144654934212608_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=3mnM4YMietYAX_DOgDS&_nc_ht=scontent.fhan2-1.fna&oh=5ccb0a6533477745913d2b3c5799b4fd&oe=6098E6D3" />
                                <h3>ƯU ĐÃI TƯNG BỪNG</h3>
                                <p>ĂN GÀ TẶNG NGAY TRỨNG CUỘN KIỂU NHẬT 𝗧𝗔𝗠𝗔𝗚𝗢𝗬𝗔𝗞𝗜
                                <br />✔️ Món ăn đặc trưng trong văn hóa ẩm thực Nhật
                                <br />✔️ Xuất hiện trên khắp thế giới trong các hình thức của Nigiri sushi.  Đảm ăn lạnh vẫn rất mềm mịn và ngon </p>
                            </div>
                        </Link>

                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}
