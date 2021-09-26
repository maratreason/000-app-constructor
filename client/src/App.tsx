import React from "react";
import styled from "styled-components";
import LeftBarPage from "./components/LeeftBarPage";
import Navbar from "./components/Navbar";
import RightBarTabs from "./components/RightBarTabs";
import Content from "./containers/Content";
import LeftBar from "./containers/LeftBar";
import Main from "./containers/Main";
import RightBar from "./containers/RightBar";
import Site from "./containers/Site";
import "./styles/globalStyles.scss";

const AppContainer = styled.div`
    position: relative;
`;

function App() {
    return (
        <AppContainer>
            <Navbar></Navbar>
            <Main>
                <LeftBar>
                    <LeftBarPage />
                </LeftBar>
                <Content>
                    <Site />
                </Content>
                <RightBar>
                    <RightBarTabs />
                </RightBar>
            </Main>
        </AppContainer>
    );
}

export default App;
