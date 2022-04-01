import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Seats from "./Seats";
import Footer from "./../Footer";
import Loading from "./../Loading";

function BookingSeats({ film, setFilm }) {
  const [session, setSession] = useState({ seats: [] });
  const [select, setSelect] = useState([]);
  const [book, setBook] = useState({});

  const navigate = useNavigate();
  const { sessionId } = useParams();
  let disabled = true;

  function updateSelect(select) {
    book.buyers = [];
    select.forEach((seat) => {
      book.buyers.push({
        idAssento: parseInt(seat),
        nome: "",
        cpf: "",
      });
    });
    book.ids = [...select];
    setBook({ ...book });
    setSelect([...select]);
  }

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`
    );
    promise.then((response) => {
      setSession(response.data);
    });
    promise.catch((err) => console.log(err.status, err.message));
  }, []);

  function sentData(e) {
    e.preventDefault();
    if (validateInput()) {
      setFilm({
        title: session.movie.title,
        day: `${session.day.date} ${session.name}`,
        buyers: book.buyers,
      });
      const promise = axios.post(
        "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
        book
      );
      promise.then(() => navigate("/sucesso"));
      promise.catch((err) => console.log(err.status, err.message));
    } else {
      alert("CPF inválido");
    }
  }

  function validateInput() {
    const cpf = book.buyers.map((comprador) => comprador.cpf);
    const cpfValido = cpf.filter((comprador) => comprador.length === 11);
    return cpf.length === cpfValido.length;
  }

  function enableButton() {
    const input = [];
    book.buyers.forEach((buyer, index) => {
      input.push(!buyer.cpf || !buyer.nome);
    });
    let final = input[0];
    input.forEach((bool) => (final = final || bool));
    disabled = disabled && final;

    return disabled;
  }

  const seats = session.seats;
  const day =
    seats.length > 0 ? `${session.day.weekday} - ${session.day.date}` : "";

  return seats.length !== 0 ? (
    <>
      <Main className="BookSeats">
        <h2>Selecione o(s) assento(s)</h2>
        <Seats seats={seats} setSelect={updateSelect} select={select} />
        {select.length > 0 ? (
          <>
            <form onSubmit={sentData}>
              {select.sort().map((seat, index) => {
                return (
                  <div key={index}>
                    <p>Assento {seat % 50 !== 0 ? seat % 50 : 50}</p>
                    <label>Nome do comprador</label>
                    <input
                      value={book.buyers[index].nome}
                      onChange={(e) => {
                        book.buyers[index].nome = e.target.value;
                        setBook({ ...book });
                      }}
                      placeholder="Digite seu nome"
                      name="name"
                      required
                    ></input>
                    <label>CPF do comprador</label>
                    <input
                      onChange={(e) => {
                        book.buyers[index].cpf = e.target.value;
                        setBook({ ...book });
                      }}
                      placeholder="Digite seu CPF (apenas numeros)"
                      type="number"
                      name="cpf"
                      required
                    ></input>
                  </div>
                );
              })}
              <button type="submit" disabled={enableButton()}>
                Reservar assento(s)
              </button>
            </form>
          </>
        ) : (
          <></>
        )}
      </Main>
      <Footer description={[session.movie.title,day]} poster = {session.movie.posterURL}/>
    </>
  ) : ( <Loading/> );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 24px 170px;
  h2 {
    line-height: 91px;
  }
  form {
    width: 100%;
    margin-top: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form p {
    font-size: 20px;
    line-height: 40px;
    font-weight: 600;
  }
  form label {
    font-size: 18px;
    line-height: 21px;
  }
  form input {
    margin-bottom: 7px;
    width: 100%;
    height: 51px;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    padding-left: 18px;
    font-size: 18px;
  }
  form input::placeholder {
    color: #afafaf;
    font-style: italic;
    opacity: 0.8;
  }
  form button {
    width: 225px;
    height: 42px;
    margin-top: 50px;
    line-height: 21px;
  }
  form button:disabled {
    opacity: 0.5;
  }
`;

export default BookingSeats;
