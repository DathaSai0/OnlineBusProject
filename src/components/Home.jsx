import React from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import OnlineBusInfo from "./Information/OnlineBusInfo";
import Footer from "./Footer";

export default function Home() {
  let FromData;
  let ToData;
  const gettingFromToData = (From, To) => {
    FromData = From;
    ToData = To;
  };
  console.log(FromData);
  console.log(ToData);
  return (
    <>
      <Banner gettingFromToData={gettingFromToData} />
      <OnlineBusInfo />
      <Footer />
    </>
  );
}
