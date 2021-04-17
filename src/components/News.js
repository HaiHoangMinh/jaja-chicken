import React, { Component } from 'react'
import Header from './headers/Header'
import Footer from './footer/Footer'

export default class News extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Tin Tuc</h1>
                <Footer />
            </div>
        )
    }
}
