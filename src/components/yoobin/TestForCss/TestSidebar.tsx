import styled from "@emotion/styled";
import { ReactComponent as MoveOffIcon } from "@/assets/icons/movie-off.svg";
import { ReactComponent as TestLogo } from "@/assets/icons/test-logo.svg";

const Snb = styled.div`
    min-width: 250px;
    width: 250px;
    transition: 0.3s;
    overflow: hidden;
`;

const Sidebar = styled.div`
    background-color: #0F172A;
    width: 250px;
    height: 100vh;
    z-index: 10;
    color: #667085;
    display: flex;
    flex-direction: column;
`;

const Logo = styled.div`
    width: 100%;
    padding: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
`;

const MenuWrap = styled.div`
    flex: 1 1;
    overflow: hidden;
`;

const Menu = styled.div`
    height: 100%;
    padding-bottom: 4px;
    overflow-y: auto;
`;

const LevelFirst = styled.div`
`;

const LevelFirstName = styled.div`
    padding: 40px 28px 28px;
        &:first-child{
            padding-top: 28px;
        }
        > span{
            display: flex;
            justify-content: flex-start;
            color: #13C690;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
`;

const LevelSecond = styled.ul`
    > li{
        padding: 4px 8px;
    }
`;

const LevelSecondName = styled.div`
    height: 36px;
    padding: 0px 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #9CA3AF;
    transition: 0.2s;
    cursor: pointer;
    > div{
        width: calc(100% - 16px);
        overflow: hidden;
        display: flex;
        align-items: center;
        > svg{
            width: 24px;
            height: 24px;
            margin-right: 12px;
            font-size: 24px;
        }
        > span{
            width: calc(100% - 36px);
            font-size: 15px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: flex;
            justify-content: flex-start;
        }
    }
`;

const LevelThirdWrapper = styled.div`
    height: 76px;
    overflow: hidden;
    transition: 0.2s;
`;

const LevelThird = styled.ul`
    > li{
        &:first-child{
            padding-top: 6px;
        }
        > span{
            color: #13C690;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: flex;
            justify-content: flex-start;
        }

    }
`;

const LevelThirdName = styled.div`
    background-color: #2C3344;
    color: #fff;
    height: 32px;
    padding: 0px 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transition: 0.2s;
    text-decoration: none;
    color: #9CA3AF;
    cursor: pointer;
    > div{
        width: 100%;
        padding-left: 8px;
        display: flex;
        align-items: center;
        > span{
            font-size: 15px;
            width: calc(100% - 12px);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            position: relative;
            display: flex;
            justify-content: flex-start;
            padding-left: 28px;
            &::before{
                content: attr(initial);
                width: 4px;
                height: 4px;
                border-radius: 50%;
                position: absolute;
                top: calc(50% - 1px);
                left: 8px;
                background-color: #fff;
                transform: translate(-50%, -50%);
                color: #fff;
                font-size: 13px;
                font-weight: bold;
                line-height: 24px;
                padding-bottom: 1px;
            }
        }
    }
`;

export default function TestSidebar(){
    return(
        <Snb>
            <Sidebar>
                <Logo>
                    <TestLogo/>
                </Logo>
                <MenuWrap>
                    <Menu>
                        <LevelFirst>
                            <li>
                                <LevelFirstName>
                                    <span>Test</span>
                                </LevelFirstName>
                                <LevelSecond>
                                    <li>
                                        <LevelSecondName>
                                            <div>
                                                <MoveOffIcon />
                                                <span>Test</span>
                                            </div>
                                        </LevelSecondName>
                                        <LevelThirdWrapper>
                                            <LevelThird>
                                                <li>
                                                    <LevelThirdName>
                                                        <div>
                                                            <span>Test</span>
                                                        </div>
                                                    </LevelThirdName>
                                                </li>
                                            </LevelThird>
                                        </LevelThirdWrapper>
                                    </li>
                                </LevelSecond>
                            </li>
                        </LevelFirst>
                    </Menu>
                </MenuWrap>
            </Sidebar>
        </Snb>
    )
}