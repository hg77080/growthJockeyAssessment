import React from "react";
import "../styles/FormContainer.css";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsApple, BsFacebook } from "react-icons/bs";
const FormContainer = () => {
  return (
    <div className="form_container">
      <div className="form_main_container">
        <p className="form_heading">Agent Login</p>
        <p className="form_subHeading">
          Hey Enter your details to get sign in
          <br /> into your account.
        </p>
        <div className="form_fields">
          <input
            placeholder="Enter Email / Phone No"
            className="input_container"
          />
          <input placeholder="Passcode" className="input_container" />
        </div>
        <p className="trouble_text">Having trouble to sign in?</p>
        <button className="sign_in_button">Sign in</button>
        <p className="trouble_text text_top">- or Sign in with -</p>
        <div className="login_buttons">
          <button className="google_button">
            <AiOutlineGoogle />
            Google
          </button>
          <button className="google_button">
            <BsApple />
            Apple ID
          </button>
          <button className="google_button">
            <BsFacebook />
            Facebook
          </button>
        </div>
        <p className="dont_text text_top">
          Don't have an account ? <span className="bold">Register Now</span>
        </p>
      </div>
      <p className="trouble_text text_top">Copyright @wework 2022 | Privacy Policy</p>
    </div>
  );
};

export default FormContainer;
