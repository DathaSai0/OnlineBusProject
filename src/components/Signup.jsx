import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    number: "",
    password: "",
  });
  let emailregexp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const signUpvalidation = (e) => {
    e.preventDefault();
    const userArr = JSON.parse(localStorage.getItem("usersArr")) || [];
    userArr.push(user);
    localStorage.setItem("usersArr", JSON.stringify(userArr));
    navigate("/Login");
  };
  return (
    <>
      <form action="" className="signupForm">
        <h1>Please create an account</h1>
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
        </div>
        <div className="form-group">
          <button type="submit" onClick={signUpvalidation}>
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}

export default Signup;
