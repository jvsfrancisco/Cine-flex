import styled from "styled-components";

function Seat({ seat, select, setSelect }) {
  return (
    <Div
      color={
        !select.includes(seat.id)
          ? seat.isAvailable
            ? {
                color: "#c3cfd9",
                border: "#808f9d",
              }
            : {
                color: "#fbe192",
                border: "#f7c52b",
              }
          : { 
            color: "#8dd7cf", 
            border: "#45bdb0" 
          }
      }
      onClick={() => {
        if (seat.isAvailable) {
          if (!select.includes(seat.id)) {
            setSelect([...select, seat.id]);
          } else {
            if (window.confirm("Deseja remover o assento e apagar os dados?")) {
              select.splice(select.indexOf(seat.id), 1);
              setSelect([...select]);
            }
          }
        } else {
          alert("Esse assento não está disponível");
        }
      }}
    >
      {seat.name}
    </Div>
  );
}

const Div = styled.button`
  width: 26px;
  height: 26px;
  font-size: 11px;
  color: #000000;
  margin: 0 7px 18px 0;
  border-radius: 12px;
  padding: 0;
  border: 1px solid;
  background-color: ${(props) => props.color.color};
  border-color: ${(props) => props.color.border};
`;

export default Seat;