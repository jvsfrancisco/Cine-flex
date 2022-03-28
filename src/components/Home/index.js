import {useState, useEffect} from "react";
import styled from 'styled-components';
import axios from "axios";
import {Link} from "react-router-dom";


export default function Home(){
    const [film, setFilm] = useState([]);
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {
            setFilm(response.data);
         });
     }, []);
    return(
        <WrapperHome>
                <div className = "Sub-Title">
                    <h2>Selecione o filme</h2>
                </div>
                <div>
                {film.map((films) => {
                    return (<div key={films.id} className="movie">
                        <Link to={`/filme/${films.id}`}>
                            <img src={films.posterURL} alt={films.title} />
                        </Link>
                  </div>)
                })}
                </div>
        </WrapperHome>
    )
}

const WrapperHome = styled.main`
div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.movie {
  margin: 9px 30px 0 0;
  padding: 8px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 150px;
}
img {
  width: 129px;
}

.Sub-Title {
    width: 100%;
    height: 80px;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color: #293845;
}
`


