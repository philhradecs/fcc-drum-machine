import React, { Component } from "react"
import styled from "styled-components"
import DrumPads from "../components/DrumPads/DrumPads"
import ControlPanel from "../components/ControlPanel/ControlPanel"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
`

const Drum = styled.div`
  width: 660px;
  height: 400px;
  background-color: purple;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      switchedOn: false,
      volume: 0.5,
      bank: 0
    }
    this.handleDrumClick = this.handleDrumClick.bind(this)
    this.handlePowerSwitch = this.handlePowerSwitch.bind(this)
    this.handleBankSwitch = this.handleBankSwitch.bind(this)
    this.handleVolumeChange = this.handleVolumeChange.bind(this)
  }
  handleDrumClick(event) {
    if (this.state.switchedOn) {
      const audio = event.target.firstElementChild
      this.setState({ name: audio.dataset.name})
      audio.volume = this.state.volume
      debugger
      // audio.play()
    }
  }
  handlePowerSwitch() {
    const message = this.state.switchedOn ? '' : 'Jam away!'
    this.setState({ name: message })

    this.setState({ switchedOn: !this.state.switchedOn})
  }
  handleBankSwitch() {
    const newBank = 1 - this.state.bank //toggles between 0 and 1
    this.setState({ bank: newBank }) 
  }
  handleVolumeChange(event) {
    const slider = event.target
    this.setState({ volume: slider.valueAsNumber })
  }
  render() {
    return (
      <Wrapper>
        <Drum id="drum-machine">
          <DrumPads handleDrumClick={this.handleDrumClick} bank={this.state.bank} />
          <ControlPanel switchedOn={this.state.switchedOn} 
                        name={this.state.name} 
                        handlePowerSwitch={this.handlePowerSwitch} 
                        handleBankSwitch={this.handleBankSwitch}
                        handleVolumeChange={this.handleVolumeChange}
          />
        </Drum>
      </Wrapper>
    )
  }
}

export default App
