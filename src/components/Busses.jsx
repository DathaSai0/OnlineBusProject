import React, { useContext } from "react";
import { StationContext } from "./StationContext";
import BusCard from "./BusCard";
import "./Busses.css";
import SearchBox from "./Banner/SearchBox";
import "./Banner/SearchBox.css";

export default function Buses() {
  const { Busdetails } = useContext(StationContext);

  return (
    <>
      <div className="Bus-section-top">
        <h1>Welcome to OnlineBus...!</h1>
        <SearchBox />
      </div>
      <div className="Bus-container">
        {Busdetails ? (
          Busdetails.map((obj) => <BusCard key={obj.busId} {...obj} />)
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </>
  );
}
