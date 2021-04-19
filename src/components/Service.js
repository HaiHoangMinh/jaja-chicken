import React, { Component } from 'react'
import Header from './headers/Header'
import Footer from './footer/Footer'
import { Link } from 'react-router-dom'

export default class Service extends Component {
    render() {
        return (
            <div className="service">
                <Header />
                <section className="service-banner">
                    <h1>DỊCH VỤ</h1>
                    <img src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/109965293_154714609553789_5115576895765203797_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=RE95P9S8RNkAX9rHGeK&_nc_ht=scontent.fhan2-2.fna&oh=a6073c1418a698353d1348ba6c67a875&oe=60A10C88" />
                </section>
                <div className="container-service-detail">
                    <div className="container-service-group">
                        <div className="service-item-detail">
                            <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/110227179_155983402760243_4926401940915098651_n.png?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_ohc=W0EbPbD0fiUAX-IQ-z5&_nc_ht=scontent.fhan2-3.fna&oh=50b60b4a391db52f85d4f1e8a20e8555&oe=60A226AB" />
                            <div className="service-info">
                                <h3>ĐẠI TIỆC SINH NHẬT</h3>
                                <p>🔸 #Giảm 𝟮𝟬% tổng hoá đơn
                                <br />🔸 #Tặng ➊  phần quà siêu đặc biệt
                                <br />📣 #Đảm #bảo
                                <br />❤️_ĂN LÀ MÊ_❤️
                                <br />💕_UỐNG LÀ PHÊ_💕
                                 <br />😍_QUÊN CẢ LỐI VỀ_😍
                                <br />🤗🤗 Hãy để JAJA  tổ chức sinh nhật cho bạn nhé !!!</p>
                                <Link to="#">
                                    <button className="btn-danger"><strong>Chi tiết</strong></button>
                                </Link>
                            </div>
                        </div>
                        <div className="service-item-detail">
                            <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/118550625_168526534839263_7096593758493230952_n.png?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_ohc=LVHE6bTc_T0AX-CeO4B&_nc_ht=scontent.fhan2-3.fna&oh=08fb6e2679cf86e540bf457821d76b1e&oe=60A1239E" />
                            <div className="service-info">
                                <h3>BACK TO SCHOOL</h3>
                                <p>CÁC BẠN ĐÃ “XÚNG XÍNH” GÌ CHO NĂM HỌC MỚI RỒI?<br />
                                🐤Để Gà kể cho mà nghe ngày tựu trường gà cũng như các bạn thật khó chịu khi phải dậy sớm và đi học đúng không nào?
                                <br />🐤Vậy JAJA sẽ tiếp sức cho các bạn bằng #món_quà_đặc_biệt với hóa đơn chỉ từ #99k
                                <br />🏃Vì số lượng có hạn nhanh chân đặt ngay để nhận được ưu đãi cực cool đến từ nhà Gà nhé
                                <br />‼️ Lưu ý:
                                <br />- Áp dụng cho đơn hàng từ 99.000 vnd
                                <br />- Không áp dụng đồng thời CTKM khác
                                <br />- Thời gian: Từ 05.04- 15.05.2021 </p>
                                <Link to="#">
                                    <button className="btn-danger"><strong>Chi tiết</strong></button>
                                </Link>
                            </div>

                        </div>
                        <div className="service-item-detail">
                            <img src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/117592795_162477918777458_8103968936704946635_n.png?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=yj7V_mjydqsAX_xN0av&_nc_ht=scontent.fhan2-1.fna&oh=b66a908ba8e8b338f456a5b38a57fc60&oe=60A1B61B" />
                            <div className="service-info">
                                <h3>CORONA JAJACHICKEN</h3>
                                <p>❌ Đi ra đường là sợ virus?
                                <br />❌ Phải mang khẩu trang khắp nơi?
                                <br />❌ Thời tiết khó chịu?
                                <br />Đừng lo nữa, 𝗝𝗔𝗝𝗔 sẵn sàng tới tận nhà bạn, trao tận tay những phần ăn còn giòn tan, nóng hổi. Cứ yên tâm, ở 𝗝𝗔𝗝𝗔 , các bạn là số 1 ❤
                                👉👉Trong tình hình dịch bệnh đang căng thẳng hãy tuân thủ đúng các quy định phòng bệnh và ở nhà chính là hành động thiết thực nhất.
                                Gọi đặt hàng ngay hoặc inbox cho 𝗝𝗔𝗝𝗔 nhé !!! </p>
                                <Link to="#">
                                    <button className="btn-danger"><strong>Chi tiết</strong></button>
                                </Link>
                            </div>

                        </div>
                        <div className="service-item-detail">
                            <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/107901932_149455093413074_6008742720088071893_n.png?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=MG0M4qhqLZgAX-uL6SE&_nc_ht=scontent.fhan2-4.fna&oh=5a6bea61d8d6cfc9f85e0e5004b6522e&oe=60A2C131" />
                            <div className="service-info">
                                <h3></h3>
                                <p>🎈🎈🎈 MÙA TỔNG KẾT 🎈🎈🎈
                                <br />💥  𝗝𝗔𝗝𝗔 nhận đặt tiệc tổng kết với nhiều ưu đãi hấp dẫn
                                <br />✅ Hỗ trợ tư vấn đặt món phù hợp ngân sách
                                <br />✅ Tất cả đồ ăn và giá cả đều có thể điều chỉnh theo nhu cầu của từng lớp
                                <br />✅  Ăn càng nhiều - Ưu đãi càng sâu
                                <br />📌 ĐẶC BIỆT , 𝗝𝗔𝗝𝗔 luôn khắt khe trong việc chọn NGUYÊN LIỆU và chế biến đặc biệt AN TOÀN nên phụ huynh hoàn toàn yên tâm
                                <br />✅ Gà tươi 100% , KHÔNG để lâu, KHÔNG độc hại
                                <br />✅ Nước sốt sử dụng các gia vị nội địa Nhật
                                <br />✅ Nhập Gà hoàn toàn từ cơ sở sản xuất được kiểm dịch chặt chẽ, đảm bảo vệ sinh ATTP
                                <br />💢 𝗝𝗔𝗝𝗔 𝗖𝗛𝗜𝗖𝗞𝗘𝗡  hân hạnh đồng hành MÙA TỔNG KẾT & luôn mang tới những bữa ăn vừa ngon , đảm bảo chất lượng </p>
                                <Link to="#">
                                    <button className="btn-danger"><strong>Chi tiết</strong></button>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
