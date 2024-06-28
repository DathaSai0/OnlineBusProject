import React, { useContext, useState } from "react";
import "./Header.css";
import { FaBars, FaUser } from "react-icons/fa";
import logo from "../Assets/logo.jpg";
import { Link } from "react-router-dom";
import { StationContext } from "../StationContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userName, userLoggedIn, loginNumber, loginPassword } =
    useContext(StationContext);

  let localData = JSON.parse(localStorage.getItem("usersArr")) || [];
  let loggeduserdata = localData.filter((obj) => {
    return obj.number === loginNumber && obj.password === loginPassword;
  });

  console.log("Header component rendered");
  console.log(menuOpen);

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>
      <nav className={`nav-items ${menuOpen ? "menu-open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/buses">Buses</Link>
        <Link to="/bookings">My Bookings</Link>
        <Link to="/login">
          <FaUser /> &nbsp;
          {loggeduserdata.length ? loggeduserdata[0].name : "Login"}
        </Link>
      </nav>
      <div className="menu">
        <FaBars onClick={() => setMenuOpen(!menuOpen)} />
      </div>
    </header>
  );
};

export default Header;
