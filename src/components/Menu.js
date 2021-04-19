import React, { Component } from 'react'
import Footer from './footer/Footer';
import Header from './headers/Header';
import Btn from './Button';
import { Link } from 'react-router-dom'
import BannerMenu from './container/banner_menu'
import axios from 'axios';


export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: []
        };
    }

    componentDidMount() { // Duoc goi sau khi component render lan dau tien => render lai
        axios({
            method: 'get',
            url: 'http://localhost:4000/menu',
            data: null // Du lieu truyen len tu body (dung cho post)
        }).then(res => {
            //console.log(res);
            const menu = res.data;
            this.setState({
                menu: res.data
            })
        })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { menu } = this.state;

        const listItems = menu.map((item) => (
            <div className="list-item" key={item.id}>
                <div className="item">
                    <div className="item-img">
                        <img src={item.thumb} />
                    </div>
                    <div className="item-detail">
                        <h2><strong>{item.pd_name}</strong></h2>
                        <p>{item.desc}</p>
                        <p className="prince"><span>Gía bán : </span><strong>{item.prince} <span>{item.curent}</span></strong> </p>
                        <Link to="/menu">
                            <Btn />
                        </Link>
                    </div>
                </div>
            </div>
        ))
        return (

            <div>
                <Header />
                <BannerMenu />
                <div id="title-menu"><h3>Thực đơn chính:</h3></div>
                <hr />
                <div className="container-menu">

                    {listItems}
                </div>
                <Footer />
            </div>
        )
    }
}







