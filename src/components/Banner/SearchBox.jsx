import React, { useState, useEffect, useContext } from "react";
import {
  FaArrowRight,
  FaArrowLeft,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import "./SearchBox.css";
import { Link } from "react-router-dom";
import { StationContext } from "../StationContext";

function SearchBox() {
  const {
    fromStation,
    setFromStation,
    toStation,
    setToStation,
    toDate,
    setToDate,
    Busdetails,
    setBusdetails,
  } = useContext(StationContext);
  const [width, setWidth] = useState(window.innerWidth); // for resizing the window
  const [originalBusDetails, setOriginalBusDetails] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    getRoutesData();
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const getRoutesData = async () => {
    const response = await fetch("https://onlinebus.onrender.com/buses", {
      method: "GET",
    });
    const data = await response.json();
    setOriginalBusDetails(data);
  };
  const filteration = () => {
    const filteredBusdetails = originalBusDetails.filter((obj) => {
      return (
        obj.from.toLowerCase() === fromStation.toLowerCase() &&
        obj.to.toLowerCase() === toStation.toLowerCase()
      );
    });
    filteredBusdetails.length > 0
      ? setBusdetails(filteredBusdetails)
      : setBusdetails(originalBusDetails);
  };
  return (
    <>
      <div className="banner-content">
        <div className="FromtoContainer">
          <input
            type="text"
            placeholder="From Station"
            value={fromStation}
            onChange={(e) => {
              setFromStation(e.target.value);
            }}
          />
          <button
            className="arrow-btn"
            onClick={() => {
              setFromStation(toStation);
              setToStation(fromStation);
            }}
          >
            <div className="arrows">
              {width <= 426 ? (
                <>
                  <FaArrowDown />
                  <FaArrowUp />
                </>
              ) : (
                <>
                  <FaArrowRight />
                  <FaArrowLeft />
                </>
              )}
            </div>
          </button>
          <input
            type="text"
            placeholder="To Station"
            value={toStation}
            onChange={(e) => {
              setToStation(e.target.value);
            }}
          />
        </div>
        <div className="DateSearchContainer">
          <input
            type="date"
            value={toDate}
            onChange={(e) => {
              setToDate(e.target.value);
            }}
          />
          <Link to="/buses">
            <button className="search-btn" onClick={filteration}>
              Search
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
