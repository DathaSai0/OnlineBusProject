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

  const [loginNumber, setLoginNumber] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({
    name: "",
    number: "",
    password: "",
    ReEnteredPassword: "",
  });

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
        user,
        setUser,
        loginNumber,
        setLoginNumber,
        loginPassword,
        setLoginPassword,
      }}
    >
      {children}
    </StationContext.Provider>
  );
};
