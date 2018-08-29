import React, { Component } from "react"
import styled from "styled-components"
import DrumPads from "../components/DrumPads/DrumPads"
import ControlPanel from "../components/ControlPanel/ControlPanel"

const Wrapper = styled.div`
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  background-color: #ddd
`

const Drum = styled.div`
  width: 660px
  height: 400px
  background-color: purple
  display: grid
  grid-template-rows: 1fr
  grid-template-columns: 1fr 1fr
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Don\'t hold back',
      switchedOn: true,
      volume: 0.5,
      bank: 0
    }
    this.handleDrumClick = this.handleDrumClick.bind(this)
    this.handlePowerSwitch = this.handlePowerSwitch.bind(this)
  }
  handleDrumClick(event) {
    const audio = event.target.firstElementChild
    this.setState({ name: audio.dataset.name})
    audio.volume = this.state.volume
    audio.play()
  }
  handlePowerSwitch() {
    this.setState({ switchedOn: !this.switchedOn})
  }
  render() {
    return (
      <Wrapper>
        <Drum id="drum-machine">
          <DrumPads handleDrumClick={this.handleDrumClick} bank={this.state.bank} />
          <ControlPanel switchedOn={this.state.switchedOn} name={this.state.name}/>
        </Drum>
      </Wrapper>
    )
  }
}

export default App
