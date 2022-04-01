import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Home";
import Sections from "./Sections";
import BookingSeats from "./BookSeats";
import { useState } from "react";

import "./../assets/css/reset.css";
import "./../assets/css/style.css";

function App() {
  const [film, setFilm] = useState({});


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/filme/:MovieId" element={<Sections/>} />
        <Route path ="/assentos/:sessionId" element={<BookingSeats
        movie = {film}
        setMovie = {setFilm}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;