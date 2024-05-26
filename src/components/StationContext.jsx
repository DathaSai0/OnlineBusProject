import React, { createContext, useState } from "react";

export const StationContext = createContext();

export const StationProvider = ({ children }) => {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [toDate, setToDate] = useState("");
  const [Busdetails, setBusdetails] = useState("");
  const [Bookingdetails, setBookingdetails] = useState([]);
  const [userLoggedIn, setuserLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <StationContext.Provider
      value={{
        fromStation,
        setFromStation,
        toStation,
        setToStation,
        toDate,
        setToDate,
        Busdetails,
        setBusdetails,
        Bookingdetails,
        setBookingdetails,
        userLoggedIn,
        setuserLoggedIn,
        userName,
        setUserName,
      }}
    >
      {children}
    </StationContext.Provider>
  );
};
