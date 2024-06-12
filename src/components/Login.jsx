import React, { useContext, useState } from "react";
import "./Login.css";
import { StationContext } from "./StationContext";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [loginNumber, setLoginNumber] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [err, setErr] = useState({
    loginNumberErr: "",
    loginPasswordErr: "",
  });
  const { userLoggedIn, setuserLoggedIn } = useContext(StationContext);
  const navigate = useNavigate();
  function signUpFunction(e) {
    e.preventDefault();
    navigate("/signup");
  }
  function formValidation(e) {
    e.preventDefault();
    let registeredUsers = JSON.parse(localStorage.getItem("usersArr"));
    console.log(registeredUsers);
    let count = 0;
    for (let obj of registeredUsers) {
      if (obj.number === loginNumber && obj.password === loginPassword) {
        navigate("/bookings");
      } else {
        count++;
      }
    }
    if (count === registeredUsers.length) {
      alert("login credentials are incorrect");
    }
  }
  return (
    <div class="login-container">
      <h2>Login to OnlineBus..</h2>
      <div className="form-container">
        <form id="login-form">
          <div>
            <input
              type="text"
              placeholder="Enter the mobile Number"
              value={loginNumber}
              onChange={(e) => {
                setLoginNumber(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter the Password"
              value={loginPassword}
              onChange={(e) => {
                setloginPassword(e.target.value);
              }}
            />
            {err.mobileNumberErr && (
              <p className="red-color">{err.mobileNumberErr}</p>
            )}
          </div>
          <div className="Login-btn-container ">
            <button type="submit" onClick={formValidation}>
              Login
            </button>
          </div>
          <div className="signupBtn">
            <h4>Please create an account if you don't have one </h4>
            <Link to={"/signup"}>Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
