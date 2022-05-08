import React from "react";
import "./SignUp.css";
import { useState, useContext, useRef } from "react";
import BasicUserDataService from "../../services/basicUser";
import PatientDataService from "../../services/patient";
import AccountDataService from "../../services/account";
import GlobalStates from "../../utils/GlobalStates";

function close_icon_function() {
  document.querySelector(".sign-up-form").style.display = "none";
  document.querySelector(".back-div").style.display = "none";
  document.querySelector("body").style.overflow = "scroll";
}

function signup_gotologin_function() {
  document.querySelector(".sign-in-form").style.display = "flex";
  document.querySelector(".back-div-signin").style.display = "flex";
  document.querySelector(".back-div").style.display = "none";
  document.querySelector(".sign-up-form").style.display = "none";
}

const SignUp = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    reEnterPassword: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
  });

  const checkBoxRef = useRef();

  const globalStates = useContext(GlobalStates);

  function handleSubmit(event) {
    event.preventDefault();

    if (input.password !== input.reEnterPassword) {
      globalStates.showSnackBar(
        "The two entered passwords are not the same!",
        "error"
      );
    } else if (
      input.username === "" ||
      input.password === "" ||
      input.reEnterPassword === "" ||
      input.firstName === "" ||
      input.lastName === "" ||
      input.emailAddress === "" ||
      input.gender === "" ||
      input.phoneNumber === "" ||
      input.dateOfBirth === ""
    ) {
      globalStates.showSnackBar(
        "None of the input fields should be empty !",
        "error"
      );
      //alert("None of the input fields should be empty !");
    } else if (!checkBoxRef.current.checked) {
      globalStates.showSnackBar(
        "Please agree to Terms and Conditions in order to Continue!",
        "warning"
      );
    } else {
      //alert("the username is " + phoneNumber_or_emailAddress + " and the password is: " + password);

      const newAccount = {
        username: input.username,
        password: input.password,
        email: input.emailAddress,
        balance: "0",
        is_activated: false,
      };
      //console.log(newAccount);

      AccountDataService.insertAccount(newAccount).then((response) => {
        console.log(response.data._id);
        const newBasicUser = {
          first_name: input.firstName,
          last_name: input.lastName,
          gender: input.gender,
          phone_number: input.phoneNumber,
          date_of_birth: input.dateOfBirth,
          accountId: response.data._id,
        };
        BasicUserDataService.insertBasicUser(newBasicUser).then((response) => {
          const newPatient = {
            basic_user_id: response.data._id,
            total_spent: 0,
          };
          PatientDataService.insertPatient(newPatient).then((response) => {
            globalStates.showSnackBar(
              "Account created successfully",
              "success"
            );
          });
        });
      });
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
      <div className="back-div">
        <div className="sign-up-form">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="close_icon"
            onClick={close_icon_function}
            viewBox="0 0 320 512"
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
          <p id="bigTitle">Create a YourDoctor account</p>
          <form className="rows" onSubmit={handleSubmit}>
            <p className="labels">Username</p>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
            />
            <p className="labels">Password</p>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
            <p className="labels">Re-enter password</p>
            <input
              type="password"
              id="re-password"
              name="reEnterPassword"
              onChange={handleChange}
            />
            <p className="labels">First Name</p>
            <input
              type="text"
              id="fname"
              name="firstName"
              onChange={handleChange}
            />
            <p className="labels">Last Name</p>
            <input
              type="text"
              id="lname"
              name="lastName"
              onChange={handleChange}
            />
            <p className="labels">Email Address</p>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              onChange={handleChange}
            />
            <p className="labels">Phone Number</p>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              onChange={handleChange}
            />

            <div className="align" id="top-mar">
              <div className="g1">
                <p className="gender_dob_labels">Gender</p>
                <div className="radio">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="radio_male"
                    onChange={handleChange}
                  />{" "}
                  <span id="male_radio">Male</span>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    id="radio_female"
                    onChange={handleChange}
                  />{" "}
                  <span id="female_radio">Female</span>
                </div>
              </div>
              <div className="g2">
                <p className="gender_dob_labels" id="dob_label">
                  Date Of Birth
                </p>
                <div className="dob_input">
                  <input
                    type="date"
                    id="birthday"
                    min="1970-04-01"
                    max="2015-04-30"
                    name="dateOfBirth"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <label id="agree_txt">
              <div id="checkbox_b">
                <input type="checkbox" ref={checkBoxRef} />
              </div>
              <div id="checkbox_t">
                I agree to <a href="#">Terms & Conditions</a> , and to
                YourDoctor's use of my information in accordance with its{" "}
                <a href="#">Privacy Policy</a>.
              </div>
            </label>
            <input type="submit" id="submit" name="submit" value="Continue" />
          </form>
          <hr id="hr_divider" />
          <div id="login_id">
            <button id="signup_gotologin" onClick={signup_gotologin_function}>
              Go to login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
