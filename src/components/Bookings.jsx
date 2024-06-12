import React, { useContext } from "react";
import { StationContext } from "./StationContext";
import "./Bookings.css";

function Bookings() {
  const { Bookingdetails, setBookingdetails, toDate } =
    useContext(StationContext);
  console.log(Bookingdetails);
  const cancelingTickets = (id) => {
    let filteredBookingDetails = Bookingdetails.filter((obj) => obj.id !== id);
    setBookingdetails(filteredBookingDetails);
  };
  return (
    <div id="ticket-booked-container">
      <h1 className="color-green success">
        {Bookingdetails.length === 0
          ? "There are no current active bookings..!"
          : "Successfully Booked Tickets"}
      </h1>
      {Bookingdetails.map((obj) => (
        <div className="booked-Data-container">
          <div className="booked-Data">
            <div className="booked-bus-name-div">
              <h1>OnlineBus</h1>
              <h2 className="booked-bus-name">{obj.name}</h2>
            </div>
            <div className="booked-arrival-departure-div">
              <div>
                <h4>Departure Time</h4>
                <p>{toDate}</p>
                <p>{obj.departureTime}</p>
                <p>{obj.from}</p>
              </div>
              <div>
                <h4>Arrival Time</h4>
                <p>{toDate}</p>
                <p> {obj.arrivalTime}</p>
                <p>{obj.to}</p>
              </div>
            </div>
            <div className="booked-price-div">
              <h4>
                Ticket Price: <span className="color-green">₹{obj.price}</span>
              </h4>
              <h4>
                Total Price:
                <span className="color-green">₹{obj.TotalPrice}</span>
              </h4>
            </div>
          </div>
          <div className="seats-container">
            <h3>
              Selected Seats: {obj.SelectedSeats.map((number) => number + ",")}
            </h3>
            <button
              className="color-red"
              onClick={() => {
                cancelingTickets(obj.id);
              }}
            >
              Cancel Tickets
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bookings;
