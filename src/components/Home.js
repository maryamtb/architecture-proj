import React from 'react';
import '../App.css';
// import Subheader from './Subheader.js';
import { ParallaxBanner } from 'react-scroll-parallax';

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Home = () => {
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

    return ( 
        <ParallaxBanner
        className="your-class"
        layers={[
            {
                image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                amount: 0.1,
            },
            {
                image: 'https://archinect.imgix.net/uploads/nt/ntolhn3l16uo4yyk.jpeg?auto=compress%2Cformat',
                amount: 0.2,
            },
        ]}
        style={{
            width: '150px',
            height: '150px',
        }}
    >
        <h1>Ahmed Lemseffer</h1>
    </ParallaxBanner>
        
    )

}
    // var intro = {
    //     fontSize: '75px',
    //     display: 'inline-block',
    //     WebkitTransition: 'all', // note the capital 'W' here
    //     msTransition: 'all', // 'ms' is the only lowercase vendor prefix
    //     fontFamily: 'Shadows Into Light',
    //     overflow: 'auto',
    // }

    // var subintro = {
    //     fontSize: '27px',
    //     fontWeight: 'light',
    // }

        

        // {/* <svg width="1000" height="1000">
        // <g transform="translate(30,20)">
        //     <text id="TextElement" x="50" y="50" style={intro}>Ahmed
        //     <animateMotion path="M -100 -10 L 465 290" dur="1s" fill="freeze" />
        //     </text>
        // </g>
        // <g transform="translate(100,180)">
        //     <text id="TextElement" x="50" y="50" style={intro}>Lemseffer
        //     <animateMotion path="M 0 0 L 105 50" dur="1.1s" fill="freeze" />
        //     </text>
        // </g>
        // <g transform="translate(380,380)">
        //     <text id="TextElement" x="50" y="50" style={subintro}> ARCHITECTE
        //     <animateMotion path="M 0 0 L 0 0" dur="1.1s" fill="freeze" />
        //     </text>
        // </g>
        // </svg> */}
    



export default Home;