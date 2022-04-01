import styled from "styled-components";

export default function Footer({description, poster}) {
  return (
    <WrapperFooter>
      <img src={poster} alt="" />
      <div>
        {description.map((detail, index) => {
          return <span key={index}>{detail}</span>;
        })}
      </div>
    </WrapperFooter>
  );
}

const WrapperFooter = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 117px;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;
  padding: 14px 10px;

  span {
    font-size: 26px;
    line-height: 30px;
  }

  img {
    width: 64px;
    height: 89px;
    border: 8px solid #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-right: 14px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;