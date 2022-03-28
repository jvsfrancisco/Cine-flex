import styled from 'styled-components';
export default function Header(){
    return(
        <WrapperHeader >
            <h1>Cine-Flex</h1>
        </WrapperHeader>
    )
}

const WrapperHeader = styled.header`
    background: rgba(195, 207, 217, 1);
    height: 67px;
    width: 100%;
    dis
    lay: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;;
    font-style: normal;
    font-weight: 300;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    text-align: center;
    color: #E8833A;`

