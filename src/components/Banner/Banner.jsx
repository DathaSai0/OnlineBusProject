import React from "react";
import SearchBox from "./SearchBox";
import "./Banner.css";

export default function Banner(p) {
  return (
    <div className="banner">
      <h1>Welcome to OnlineBus....!</h1>
      <SearchBox />
    </div>
  );
}
