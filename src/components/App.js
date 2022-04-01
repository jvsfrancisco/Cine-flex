import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Home";
import Sections from "./Sections";
import BookingSeats from "./BookSeats";
import Sucess from "./Sucess";
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
        film = {film}
        setFilm = {setFilm}/>} />
        <Route path ="/sucesso" element={<Sucess
        title = {film.title} day = {film.day} buyers = {film.buyers} setFilm = {setFilm}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;