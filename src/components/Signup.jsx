import React, { useContext, useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { StationContext } from "./StationContext";

function Signup() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(StationContext);
  const [signUpErr, setsignUpErr] = useState({
    nameErr: "",
    numberErr: "",
    passwordErr: "",
    ReEnterpasswordErr: "",
  });
  let passwordRegexp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const signUpvalidation = (e) => {
    e.preventDefault();
    let isProperdata = true;
    if (user.name.trim().length <= 2) {
      setsignUpErr((err) => ({
        ...err,
        nameErr: "Name should contain more than 2 characters",
      }));
      isProperdata = false;
    } else {
      setsignUpErr((err) => ({
        ...err,
        nameErr: "",
      }));
    }
    if (user.number.trim().length !== 10) {
      setsignUpErr((err) => ({
        ...err,
        numberErr: "Number should contain 10 digits",
      }));
      isProperdata = false;
    } else {
      setsignUpErr((err) => ({
        ...err,
        numberErr: "",
      }));
    }
    if (!passwordRegexp.test(user.password.trim())) {
      setsignUpErr((err) => ({
        ...err,
        passwordErr:
          "Password should have at least a number and at least a special character.",
      }));
      isProperdata = false;
    } else {
      setsignUpErr((err) => ({
        ...err,
        passwordErr: "",
      }));
    }
    if (user.ReEnteredPassword.trim() !== user.password.trim()) {
      setsignUpErr((err) => ({
        ...err,
        ReEnteredPassword:
          "Please enter the password that you have entered above.",
      }));
      isProperdata = false;
    } else {
      setsignUpErr((err) => ({
        ...err,
        ReEnteredPassword: "",
      }));
    }
    if (isProperdata) {
      const userArr = JSON.parse(localStorage.getItem("usersArr")) || [];
      userArr.push(user);
      localStorage.setItem("usersArr", JSON.stringify(userArr));
      navigate("/Login");
    }
  };
  return (
    <>
      <div className="creatAccountDiv">
        <h1>Please create an account</h1>
      </div>
      <form action="" className="signupForm">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          />
          {signUpErr.nameErr && <p className="signred">{signUpErr.nameErr}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="number">Number</label>
          <input
            type="text"
            id="number"
            name="number"
            value={user.number}
            onChange={(e) => {
              setUser({ ...user, number: e.target.value });
            }}
          />
          {signUpErr.numberErr && (
            <p className="signred">{signUpErr.numberErr}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
          {signUpErr.passwordErr && (
            <p className="signred">{signUpErr.passwordErr}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Re-Enter the Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.ReEnteredPassword}
            onChange={(e) => {
              setUser({ ...user, ReEnteredPassword: e.target.value });
            }}
          />
          {signUpErr.ReEnteredPassword && (
            <p className="signred">{signUpErr.ReEnteredPassword}</p>
          )}
        </div>
        <div className="form-group">
          <button type="submit" onClick={signUpvalidation}>
            Sign Up
          </button>
        </div>
      </form>
      <div className="signupBtn">
        <h4>If you have an account already please login here..</h4>
        <Link to={"/Login"}>Login</Link>
      </div>
    </>
  );
}

export default Signup;
