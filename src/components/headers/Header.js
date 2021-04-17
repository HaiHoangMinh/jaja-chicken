import Navbar from './Navbar.js';
import Logo from './Logo.js'
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="navbar-default">
                <Navbar />
                <Logo />
            </div>
        )
    }
}
