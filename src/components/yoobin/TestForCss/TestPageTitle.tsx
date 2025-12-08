import styled from "@emotion/styled";

const PageTitle = styled.div`
    width: 100%;
    height: 84px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
    padding: 28px 30px;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 48px;
    > h4{
        font-size: 20px;
        font-weight: 800;
    }
`;

const BreadCrumb = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        top: 50%;
        left: -24px;
        transform: translateY(-50%);
        width: 1px;
        height: 16px;
        background-color: #CFCFCF;
    }
    > span{
        &:nth-child(odd){
            font-size: 18px;
            display: inline-block;
            font-size: 16px;
            color: #667085;
        }
        &:nth-child(even){
            font-size: 14px;
            color: #667085;
        }
        &:last-child{
            font-size: 14px;
            color: #101828;
            font-weight: 700;
        }
    }
`;

export default function TestPageTitle(){
    return(
        <PageTitle>
            <Title>
                <h4>회사정보관리</h4>
                <BreadCrumb>
                    <span>asdf</span>
                    <span>&gt;</span>
                    <span>asdf</span>
                    <span>&gt;</span>
                    <span>asdf</span>
                </BreadCrumb>
            </Title>
        </PageTitle>
    )
}