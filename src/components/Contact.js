import React from 'react';
import Form from './Form.js';
import NavBar from './NavBar.js';


const Contact = () => {
    return (
       <div>
          <NavBar />
          <h1>Contact</h1>
          <p>Want to get in touch? - Leave a message</p>
          <br></br>
          <Form />
       </div>
    );
}
 
export default Contact;