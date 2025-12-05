import styled from "@emotion/styled";

const Content = styled.div`
    padding: 0px 30px 30px;
    height: calc(100% - 84px);
    min-height: calc(100% - 84px);
    font-size: 30px;
    > div{
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
`;

export default function TestContent() {
    return(
        <Content>
            <div></div>
        </Content>
    )
}