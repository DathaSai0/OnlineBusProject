import React, { useContext, useState, useEffect } from "react";
import "./ShowSeatsPopUp.css";
import { useNavigate } from "react-router-dom";
import { StationContext } from "./StationContext";
import seatLogo from "./Assets/chair.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

function ShowSeatsPopUp({ onClose, BusDetails }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const { Bookingdetails, setBookingdetails, userLoggedIn } =
    useContext(StationContext);

  const navigate = useNavigate();

  const seats = BusDetails.seats || [];

  const toggleSeatSelection = (seatId) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter((seat) => seat !== seatId)
        : [...prevSelectedSeats, seatId]
    );
  };

  const BookNow = () => {
    return selectedSeats.length === 0;
  };

  const calculateTotalPrice = () => {
    return selectedSeats.length * BusDetails.price;
  };

  const BookingTickets = () => {
    setBookingdetails([
      ...Bookingdetails,
      {
        ...BusDetails,
        SelectedSeats: selectedSeats,
        TotalPrice: selectedSeats.length * BusDetails.price,
        id: Bookingdetails.length + 1,
      },
    ]);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      if (userLoggedIn) {
        navigate("/bookings");
      } else {
        navigate("/login");
      }
    }, 1000);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button id="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Seats Availability</h2>
        {showMessage && (
          <div className={userLoggedIn ? "message-success" : "message-danger"}>
            {userLoggedIn
              ? "Tickets are booked successfully."
              : "Please login to book the tickets."}
          </div>
        )}

        <div className="Booking-container">
          <div>
            <div className="reference-div">
              <div className="btn-span-container1">
                <button>
                  <img src={seatLogo} alt="seat" width="20px" />
                </button>
                <span>Available Seats</span>
              </div>
              <div className="btn-span-container2">
                <button>
                  <img src={seatLogo} alt="seat" width="20px" />
                </button>
                <span>Not Available Seats</span>
              </div>
            </div>
            <p>Frontside</p>
            <div className="seats-grid">
              {seats.map((seat, index) => (
                <OverlayTrigger
                  key={index}
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-${index}`}>
                      {seat.status === "disabled" || seat.status === "reserved"
                        ? seat.id + " is not available"
                        : seat.id + " is available"}
                    </Tooltip>
                  }
                >
                  <button
                    className={`seat-btn ${
                      selectedSeats.includes(seat.id) ? "selected" : ""
                    } ${
                      seat.status === "disabled" || seat.status === "reserved"
                        ? "disabled"
                        : "NormalSeats"
                    }`}
                    onClick={() => {
                      if (
                        seat.status !== "disabled" &&
                        seat.status !== "reserved"
                      ) {
                        toggleSeatSelection(seat.id);
                      }
                    }}
                    disabled={
                      seat.status === "disabled" || seat.status === "reserved"
                    }
                  >
                    <img src={seatLogo} alt="seat" width="20px" />
                  </button>
                </OverlayTrigger>
              ))}
            </div>
            <p>Backside</p>
            <div className="Book-Now-Btn-div">
              {userLoggedIn ? (
                <button
                  onClick={BookingTickets}
                  disabled={BookNow()}
                  className={BookNow() ? "disabled-color" : "normal-color"}
                >
                  Book Now
                </button>
              ) : (
                <button
                  onClick={BookingTickets}
                  disabled={BookNow()}
                  className={BookNow() ? "disabled-color" : "normal-color"}
                >
                  Book Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowSeatsPopUp;
