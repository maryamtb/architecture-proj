import React from 'react';
import NavBar from './NavBar.js';


const Error = () => {
    return (
       <div>
         <NavBar />
         <p>Oops! It looks like this page doesn't exist.</p>
         <button><a href="/">Return</a></button>
      </div>
    );
}
 
export default Error;