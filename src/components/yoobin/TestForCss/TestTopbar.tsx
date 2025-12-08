import styled from "@emotion/styled";

const Nav = styled.div`
    height: 56px;
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    overflow: hidden;
    border-bottom: 1px solid #DCDCDC;
    position: relative;
    z-index: 1;
`;


export default function TestTopbar(){
    return(
        <Nav>
            <div></div>
            <div></div>
        </Nav>
    )
}