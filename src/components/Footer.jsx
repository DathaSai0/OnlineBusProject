import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-top-section">
        <h2>Sai Travells</h2>
        <p className="copyrightdiv">
          copyright &copy; 2024 by Datha sai | All Rights Reserved
        </p>
        <div>
          <Link to="/">Home</Link>
          <Link to="/buses">Buses</Link>
          <Link to="/bookings">My Bookings</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
