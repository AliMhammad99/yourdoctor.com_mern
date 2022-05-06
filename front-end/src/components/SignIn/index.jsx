import React from "react";
import "./SignIn.css";
import { useState, useContext } from "react";
import GlobalStates from "../../utils/GlobalStates";

function close_icon_function() {
  document.querySelector(".sign-in-form").style.display = "none";
  document.querySelector(".back-div-signin").style.display = "none";
  document.querySelector("body").style.overflow = "scroll";
}

function signin_goto_signup_function() {
  document.querySelector(".sign-in-form").style.display = "none";
  document.querySelector(".back-div-signin").style.display = "none";
  document.querySelector(".back-div").style.display = "flex";
  document.querySelector(".sign-up-form").style.display = "flex";
}
const SignIn = () => {
  const [input, setInput] = useState({
    phoneNumber_or_emailAddress: "",
    password: "",
  });

  const globalStates = useContext(GlobalStates);

  function handleSubmit(event) {
    event.preventDefault();
    //  let chk = document.getElementById("checkbox_id");
    if (input.phoneNumber_or_emailAddress === "") {
      globalStates.showSnackBar("Please enter email.", "error");
    } else if (input.password === "") {
      globalStates.showSnackBar("Please enter password.", "error");
    }
    // else if(!chk.checked){
    //   alert("checkbox not checked!");
    // }
    else {
      //alert("the username is " + phoneNumber_or_emailAddress + " and the password is: " + password);
      // event.preventDefault();
      // const newRequest = {
      //   phoneNumber_or_emailAddress: input.phoneNumber_or_emailAddress,
      //   password: input.password,
      // };
      // axios.post("http://localhost:5000/post", newRequest);

      globalStates.setAuthenticated(true);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(name + "  " + value);
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  return (
    <>
      <div className="back-div-signin">
        <div className="sign-in-form">
          <svg
            id="close_icon_signin"
            xmlns="http://www.w3.org/2000/svg"
            onClick={close_icon_function}
            viewBox="0 0 320 512"
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>

          <p id="bigTitle">Login to YourDoctor account</p>

          <form className="rows" onSubmit={handleSubmit}>
            <p className="labels" id="em_margin">
              Email or Mobile
            </p>
            <input
              type="text"
              id="username"
              name="phoneNumber_or_emailAddress"
              onChange={handleChange}
            />
            <p className="labels">Password</p>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />

            <label id="agree_txt">
              <div id="checkbox_b">
                <input type="checkbox" id="checkbox_id" />
              </div>
              <div id="checkbox_t">Keep me logged on this trusted device</div>
            </label>
            <input type="submit" id="submit" name="submit" value="Log in" />
          </form>
          <hr id="hr_divider" />
          <div id="login_id">
            <button onClick={signin_goto_signup_function}>
              Create a patient account
            </button>
            <button id="reset_password">Reset password</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
