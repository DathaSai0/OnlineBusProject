import React, { useContext, useRef } from "react";
import "./Header.css";
import { FaBars, FaUser } from "react-icons/fa";
import logo from "../Assets/logo.jpg";
import { Link } from "react-router-dom";
import { StationContext } from "../StationContext";
const Header = () => {
  const nav = useRef();
  const { userName, userLoggedIn, loginNumber, loginPassword } =
    useContext(StationContext);
  let localData = JSON.parse(localStorage.getItem("usersArr"));
  let loggeduserdata = localData.filter((obj) => {
    return obj.number === loginNumber && obj.password === loginPassword;
  });
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="" srcset="" />
      </div>
      <nav className="nav-items " ref={nav}>
        <Link to="/">Home</Link>
        <Link to="/buses">Buses</Link>
        <Link to="/bookings">My Bookings</Link>
        <Link to="/login">
          <FaUser /> &nbsp; {userLoggedIn ? loggeduserdata[0].name : "Login"}
        </Link>
      </nav>
      <div className="menu">
        <FaBars
          onClick={() => {
            nav.current.classList.toggle("menu-open");
          }}
        />
      </div>
    </header>
  );
};

export default Header;
