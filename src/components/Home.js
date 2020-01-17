import React from 'react';
import '../App.css';
import Subheader from './Subheader.js';
import Parallax from './Parallax.js';
import NavBar from './NavBar.js';

var intro = {
    fontSize: '75px',
    display: 'inline-block',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all', // 'ms' is the only lowercase vendor prefix
    fontFamily: 'Shadows Into Light',
    overflow: 'auto',
}

var subintro = {
    fontSize: '27px',
    fontWeight: 'light',
}

const Home = () => {

    return ( 
        <div>
        <Subheader />
        <NavBar />
        
        {/* <svg width="1000" height="1000">
        <g transform="translate(30,20)">
            <text id="TextElement" x="50" y="50" style={intro}>Ahmed
            <animateMotion path="M -100 -10 L 465 290" dur="1s" fill="freeze" />
            </text>
        </g>
        <g transform="translate(100,180)">
            <text id="TextElement" x="50" y="50" style={intro}>Lemseffer
            <animateMotion path="M 0 0 L 105 50" dur="1.1s" fill="freeze" />
            </text>
        </g>
        <g transform="translate(380,380)">
            <text id="TextElement" x="50" y="50" style={subintro}> ARCHITECTE
            <animateMotion path="M 0 0 L 0 0" dur="1.1s" fill="freeze" />
            </text>
        </g>
        </svg> */}
        <Parallax />
        </div>
    )

}

export default Home;