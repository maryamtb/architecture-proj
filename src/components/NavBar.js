import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import logo from '../logo.png';
import '../App.css';


class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
            hideOrShowHambugerDropDown: 'nav'
        }
    }

    handleClick = () => {
        this.setState({open: !this.state.open});
    }

    displayHamburgerMenu = () => {
        return (
            <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={40}
                    height={20}
                    strokeWidth={2}
                    rotate={0}
                    color='black'
                    borderRadius={1}
                    animationDuration={0.5}
                />
        )
    }

    displayNavBar = () => {
        return (
            <ul className='nav'>
                <li><img src={logo} className='navlogo' alt="lo"/></li>
                <li className='nav-link'><NavLink to="/">Home</NavLink></li>
                <li className='nav-link'><NavLink to="/about">About</NavLink></li>
                <li className='nav-link'><NavLink to="/projects">Projects</NavLink></li>
                <li className='nav-link'><NavLink to="/careers">Careers</NavLink></li>
                <li className='nav-link'><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        )
    }

    displayMobileMenu = () => {
        return (
            <ul className='hamburgerDropDown'>
                <li><img src={logo} className='navlogo' alt="lo"/></li>
                <li className='nav-link'><NavLink to="/">Home</NavLink></li>
                <li className='nav-link'><NavLink to="/about">About</NavLink></li>
                <li className='nav-link'><NavLink to="/projects">Projects</NavLink></li>
                <li className='nav-link'><NavLink to="/careers">Careers</NavLink></li>
                <li className='nav-link'><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        )
    }

    render() {
        return (
            <div className='navbar'>
                { this.state.open ?  this.displayMobileMenu() : null}
                {window.innerWidth > 1200 ? this.displayNavBar() : this.displayHamburgerMenu()}
            </div>
        );
    }
}

export default NavBar;