import styled from "styled-components";
import Seat from "./Seat";

function Seats({ seats, setSelect, select }) {
  const description = [
    {
      title: "Selecionado",
      color: "#8dd7cf",
      border: "#45bdb0",
    },
    {
      title: "Disponível",
      color: "#c3cfd9",
      border: "#808f9d",
    },
    {
      title: "Indisponível",
      color: " #fbe192",
      border: "#f7c52b",
    },
  ];

  return (
    <SeatsWrapper className="Seats">
      {seats.map((seat) => {
        return (
          <Seat
            seat={seat}
            select={select}
            setSelect={setSelect}
            key={seat.id}
          />
        );
      })}
      <div className="description">
        {description.map(({ title, color, border }) => {
          return (
            <Description key={color} color={color} border={border}>
              <div className="color"></div>
              <p>{title}</p>
            </Description>
          );
        })}
      </div>
    </SeatsWrapper>
  );
}

const SeatsWrapper = styled.section`
  width: 330px;
  .description {
    display: flex;
    justify-content: space-evenly;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .color {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    border: solid 1px ${(props) => props.border};
    margin-bottom: 5px;
  }
  p {
    font-size: 13px;
    line-height: 15px;
  }
`;

export default Seats;