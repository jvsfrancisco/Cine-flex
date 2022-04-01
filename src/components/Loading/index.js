import styled from "styled-components";

import loading from "./../../assets/Spinner.gif";

function Loading() {
  return (
    <Div>
      <img src={loading} alt="loading" />
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    margin-bottom: 15px;
  }
`;

export default Loading;