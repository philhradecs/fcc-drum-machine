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
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    const triggeredElement = document.getElementById(event.key.toUpperCase())
    if (triggeredElement) {
      this.playSound(triggeredElement)
    }
  }

  handleDrumClick(event) {
    const audio = event.target.firstElementChild
    this.playSound(audio)
  }

  playSound(el) {
    if (this.state.switchedOn) {
      this.setState({ name: el.dataset.name})
      el.volume = this.state.volume
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
