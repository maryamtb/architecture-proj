import React from "react";
import Form from "../../components/form/form";
import NavBar from "../../components/navigation/navbar";

const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <h1>Contact</h1>
      <p>Want to get in touch? - Leave a message</p>
      <br></br>
      <Form />
    </div>
  );
};

export default ContactPage;
