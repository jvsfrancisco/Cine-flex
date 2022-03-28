import styled from 'styled-components';
export default function Header(){
    return(
        <WrapperHeader >
            <h1>Cine-Flex</h1>
        </WrapperHeader>
    )
}

const WrapperHeader = styled.header`
    position: fixed;
    z-index: 1;
    top: 0;
    background: rgba(195, 207, 217, 1);
    height: 75px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    width: 100%;
    dislay: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 300;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    text-align: center;
    color: #E8833A;`

