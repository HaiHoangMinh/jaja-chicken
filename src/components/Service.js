import React, { Component } from 'react'
import Header from './headers/Header'
import Footer from './footer/Footer'

export default class Service extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Dich Vu</h1>
                <Footer />
            </div>
        )
    }
}
