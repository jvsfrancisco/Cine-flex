import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Footer from "./../Footer";
import Loading from "../Loading";

export default function Sections() {
  const { MovieId } = useParams();

  const [film, setFilm] = useState({ days: [] });

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${MovieId}/showtimes`
    );
    promise.then((response) => {
      setFilm(response.data);
    });
  }, []);

  const sections = film.days;

  return sections.length !== 0 ?(
    <>
      <Main>
        <h2>Selecione o horário</h2>
        <div className="TimeBoard">
          {sections.map((day) => {
            return (
              <div key={day.id}>
                <p>
                  {day.weekday} - {day.date}
                </p>
                <div>
                  {day.showtimes.map((session) => {
                    return (
                      <Link to={`/assentos/${session.id}`} key={session.id}>
                        <button>{session.name}</button>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Main>
      <Footer description ={[film.title]} poster = {film.posterURL}/>
    </>
  ) : ( <Loading/>);
}

const Main = styled.main`
  margin: 80px 0 140px;
  h2 {
      position: absolute;
        top: 100px;
        left: 28%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #293845;
  }
.TimeBoard {
    margin-top: 170px;
}

  div {
    margin-left: 24px;
  }
  div > div {
    margin-bottom: 23px;
  }
  p {
    font-size: 20px;
  }
  div > div > div {
    margin: 22px 0 0 0;
  }
  button {
    background: rgba(232, 131, 58, 1);
    border-radius: 3px;
    margin-right: 8px;
    width: 83px;
    height: 43px;
    border-decoration: none;
    color: #FFFFFF;
    font-size: 18px;
  }
`;
