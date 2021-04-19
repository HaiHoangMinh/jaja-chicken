import React, { Component } from 'react'
import Header from './headers/Header'
import Footer from './footer/Footer'
import axios from 'axios'

export default class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbacks: []
        };
    }

    componentDidMount() { // Duoc goi sau khi component render lan dau tien => render lai
        axios({
            method: 'get',
            url: 'http://localhost:4000/feedback',
            data: null // Du lieu truyen len tu body (dung cho post)
        }).then(res => {
            console.log(res);
            const menu = res.data;
            this.setState({
                feedbacks: res.data
            })
        })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        const { feedbacks } = this.state;
        const listItems = feedbacks.map((item) => (
            <div className="feedback-items" >
                <div className="feedback-item">
                    <h4>User: {item.name}</h4>
                    <h4>Email: {item.email}</h4>
                    <p>Phản hồi : {item.title}</p>
                    <img src={item.image} />
                </div>
            </div>
        ))
        return (
            <div>
                <Header />
                <h2>Các phản hồi của người dùng :</h2>
                <div >
                    {listItems}
                </div>
                <br />
                <form>
                    <textarea placeholder="Viết phản hồi" rows="10" cols="150" >

                    </textarea>
                    <br />
                    <button type="Submit" className="btn-banner" id="btn-fed">Gửi phản hồi</button>
                </form>
                <br />
                <Footer />
            </div>
        )
    }
}
