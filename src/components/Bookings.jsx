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
      <h1 className="color-green success">Successfully Booked Tickets</h1>
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
                <h5>{toDate}</h5>
                <h5>{obj.departureTime}</h5>
                <h5>{obj.from}</h5>
              </div>
              <div>
                <h4>Arrival Time</h4>
                <h5>{toDate}</h5>
                <h5> {obj.arrivalTime}</h5>
                <h5>{obj.to}</h5>
              </div>
            </div>
            <div className="booked-price-div">
              <h2>Price Per Ticket: </h2>
              <h3 className="color-green">₹{obj.price}</h3>
              <h2>Total Price: </h2>
              <h3 className="color-green">₹{obj.TotalPrice}</h3>
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
