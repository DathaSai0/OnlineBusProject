import React, { useContext, useState } from "react";
import "./Login.css";
import { StationContext } from "./StationContext";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setemail] = useState("");
  const [err, setErr] = useState({
    userNameErr: "",
    mobileNumberErr: "",
    emailErr: "",
  });
  const { userLoggedIn, setuserLoggedIn, userName, setUserName } =
    useContext(StationContext);
  const navigate = useNavigate();
  let emailregexp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  function formValidation(e) {
    e.preventDefault();
    let logging = true;
    if (userName.length < 3) {
      setErr((prev) => ({ ...prev, userNameErr: "Enter the proper Name" }));
      logging = false;
    } else {
      setErr((prev) => ({ ...prev, userNameErr: "" }));
      logging = true;
    }
    if (mobileNumber.length !== 10) {
      setErr((prev) => ({
        ...prev,
        mobileNumberErr: "Enter the proper Phone number",
      }));
      logging = false;
    } else {
      setErr((prev) => ({
        ...prev,
        mobileNumberErr: "",
      }));
      logging = true;
    }
    if (!emailregexp.test(email)) {
      setErr((prev) => ({ ...prev, emailErr: "Enter the valid email id" }));
      logging = false;
    } else {
      setErr((prev) => ({ ...prev, emailErr: "" }));
      logging = true;
    }
    if (logging) {
      setuserLoggedIn(true);
      navigate("/buses");
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
              placeholder="Username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            {err.userNameErr && <p className="red-color">{err.userNameErr}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            />
            {err.mobileNumberErr && (
              <p className="red-color">{err.mobileNumberErr}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="email address"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            {err.emailErr && <p className="red-color">{err.emailErr}</p>}
          </div>
          <div className="Login-btn-container">
            <button type="submit" onClick={formValidation}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
