import React, { useContext, useState } from "react";
import "./BusCard.css";
import { StationContext } from "./StationContext";
import ShowSeatsPopUp from "./ShowSeatsPopUp";

function BusCard({ arrivalTime, departureTime, from, to, name, price, seats }) {
  const { toDate } = useContext(StationContext);
  const [showSeats, setShowSeats] = useState();
  const onClose = () => {
    setShowSeats(false);
  };
  return (
    <div className="bus-card">
      <div className="Card-Data">
        <div className="bus-name-div">
          <h1>OnlineBus</h1>
          <h2 className="bus-name">{name}</h2>
        </div>
        <div className="arrival-departure-div">
          <div>
            <h4>Departure Time</h4>
            <p>{toDate}</p>
            <p>{departureTime}</p>
            <p>{from}</p>
          </div>
          <div>
            <h4>Arrival Time</h4>
            <p>{toDate}</p>
            <p> {arrivalTime}</p>
            <p>{to}</p>
          </div>
        </div>
        <div className="price-div">
          <h2>Price: </h2>
          <h3>₹{price}</h3>
        </div>
      </div>
      <div className="show-seats-btn">
        <button
          onClick={() => {
            setShowSeats(true);
          }}
        >
          Show Seats
        </button>
      </div>
      {showSeats && (
        <ShowSeatsPopUp
          onClose={onClose}
          BusDetails={{
            arrivalTime,
            departureTime,
            from,
            to,
            name,
            price,
            seats,
          }}
        />
      )}
    </div>
  );
}

export default BusCard;
