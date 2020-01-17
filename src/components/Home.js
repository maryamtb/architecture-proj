import React from 'react';
import '../App.css';
import Subheader from './Subheader.js';
import Parallax from './Parallax.js';
import NavBar from './NavBar.js';

const Home = () => {
    return ( 
        <div>
        <Subheader />
        <NavBar />
        <Parallax />
        </div>
    )

}

export default Home;