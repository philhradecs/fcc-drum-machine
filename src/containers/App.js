import React, { Component } from "react";
import styled from "styled-components";
import DrumPads from "../components/DrumPads/DrumPads";
import ControlPanel from "../components/ControlPanel/ControlPanel";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DDD;
`;

const Drum = styled.div`
    width: 660px;
    height: 400px;
    background-color: purple;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
`;

class App extends Component {
    render() {
        return (
            <Wrapper>
                <Drum id="drum-machine">
                    <DrumPads />
                    <ControlPanel />
                </Drum>
            </Wrapper>
        );
    }
}

export default App;
