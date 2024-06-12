import React, { useContext, useState } from "react";
import "./Login.css";
import { StationContext } from "./StationContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [err, setErr] = useState({
    loginNumberErr: "",
    loginPasswordErr: "",
  });
  const {
    setuserLoggedIn,
    loginNumber,
    setLoginNumber,
    loginPassword,
    setLoginPassword,
  } = useContext(StationContext);
  const navigate = useNavigate();
  let passwordRegexp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  function formValidation(e) {
    e.preventDefault();
    let isValid = true;
    if (loginNumber.trim().length !== 10) {
      setErr((err) => ({
        ...err,
        loginNumberErr: "Mobile Number should contain 10 digits",
      }));
      isValid = false;
    } else {
      setErr((err) => ({
        ...err,
        loginNumberErr: "",
      }));
    }

    if (!passwordRegexp.test(loginPassword)) {
      setErr((err) => ({
        ...err,
        loginPasswordErr:
          "Password should have at least a number and at least a special character.",
      }));
      isValid = false;
    } else {
      setErr((err) => ({
        ...err,
        loginPasswordErr: "",
      }));
    }

    if (!isValid) {
      return;
    }

    let registeredUsers = JSON.parse(localStorage.getItem("usersArr")) || [];
    let userFound = registeredUsers.find(
      (user) => user.number === loginNumber && user.password === loginPassword
    );

    if (userFound) {
      setuserLoggedIn(true);
      navigate("/bookings");
    } else {
      alert("Login credentials are incorrect");
    }
  }

  return (
    <div className="login-container">
      <h2>Login to OnlineBus..</h2>
      <div className="form-container">
        <form action="" className="LoginForm">
          <div className="form-div">
            <label htmlFor="number">Mobile Number</label>
            <input
              type="text"
              id="number"
              name="number"
              value={loginNumber}
              onChange={(e) => {
                setLoginNumber(e.target.value);
              }}
            />
            {err.loginNumberErr && (
              <p className="red-color">{err.loginNumberErr}</p>
            )}
          </div>
          <div className="form-div">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginPassword}
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            />
            {err.loginPasswordErr && (
              <p className="red-color">{err.loginPasswordErr}</p>
            )}
          </div>
          <div className="form-div">
            <button type="submit" onClick={formValidation}>
              Login
            </button>
          </div>
        </form>
        <div className="signupBtn">
          <h4>Please create an account if you don't have one </h4>
          <Link to={"/signup"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
