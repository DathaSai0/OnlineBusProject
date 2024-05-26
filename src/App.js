import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header/Header";
import Busses from "./components/Busses";
import { StationProvider } from "./components/StationContext";
import Bookings from "./components/Bookings";
import Login from "./components/Login";

function App() {
  return (
    <>
      <StationProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buses" element={<Busses />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </StationProvider>
    </>
  );
}

export default App;
