import React, { Component } from 'react'
import Container from './container/Container';
import Footer from './footer/Footer';
import Header from './headers/Header'

export default class home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container />
                <Footer />
            </div>
        )
    }
}
