import React, { useContext, useState } from "react";
import "./ShowSeatsPopUp.css";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { StationContext } from "./StationContext";

function ShowSeatsPopUp({ onClose, BusDetails }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const { Bookingdetails, setBookingdetails, userLoggedIn } =
    useContext(StationContext);

  const navigate = useNavigate(); // Initialize useNavigate

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
            <p>Frontside</p>
            <div className="seats-grid">
              {seats.map((seat, index) => (
                <button
                  key={index}
                  className={`seat-btn ${
                    selectedSeats.includes(seat.id) ? "selected" : ""
                  } ${seat.status === "disabled" ? "disabled" : ""} ${
                    seat.status === "reserved" ? "reserved" : ""
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
                  {seat.id}
                </button>
              ))}
            </div>
            <p>Backside</p>
          </div>

          <div className="booking-section">
            <div>
              <h3>
                Bus Name: <span>{BusDetails.name}</span>
              </h3>
              <h3>From: {BusDetails.from}</h3>
              <h3>To: {BusDetails.to}</h3>
              <h3>Departure Time: {BusDetails.departureTime}</h3>
              <h3>Arrival Time: {BusDetails.arrivalTime}</h3>
              <h3>
                Selected Seats: {selectedSeats.map((number) => number + ",")}
              </h3>
              <h2>
                Price per seat:{" "}
                <span className="green_color">₹{BusDetails.price}</span>
              </h2>
              <h2>
                Total Price:{" "}
                <span className="green_color">₹{calculateTotalPrice()}</span>
              </h2>
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
    </div>
  );
}

export default ShowSeatsPopUp;
