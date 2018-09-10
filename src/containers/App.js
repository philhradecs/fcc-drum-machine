import React, { Component } from 'react'
import styled from 'styled-components'
import DrumPads from '../components/DrumPads/DrumPads'
import ControlPanel from '../components/ControlPanel/ControlPanel'

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('https://s26.postimg.cc/je8d10p7d/man-rock-record-music-vinyl-vintage-retro-old-male-equipment-ele.jpg');
  background-size: cover;
  border-radius: 22px;
  border: 7px solid white;
`

const Drum = styled.div`
  width: 640px;
  height: 330px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'pads controls';
  grid-gap: 26px;
  border: 1px solid white;
  border-radius: 12px;
  background: url('https://s26.postimg.cc/3x00onm9l/steel_surface_Small.jpg');
  background-size: cover;
  box-shadow: 8px 10px 35px -3px #111;
  padding: 22px 22px 22px 22px;

  @media (max-width: 800px) {
    height: 640px;
    width: 280px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: 'controls'
    'pads';
  }
`

const Controls = styled.div`
  grid-area: controls;
  margin: 0;
  height: 100%;
`
const Pads = styled.div`
  grid-area: pads;
  height: 100%;
`

class App extends Component {
  constructor () {
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
  // includes freeCodeCamp test suite
  componentDidMount () {
    const tests = document.createElement('script')
    tests.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
    tests.async = true
    document.body.appendChild(tests)
  }
  // event listeners for keyboard control
  componentWillMount () {
    document.addEventListener('keydown', this.handleKeyDown)
  }
  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown (event) {
    let key = event.key;
    if (key) {
      // only process truthy values for key name (avoid problems with test suite)
      if (key == 'y') { // for european keyboards
        key = 'z';
      }
      const audio = document.getElementById(key.toUpperCase())
      if (audio) {
        // an element with the id of the pressed key name actually exists
        this.playSound(audio)
      }
    }
  }

  handleDrumClick (event) {
    const audio = event.target.firstElementChild
    this.playSound(audio)
  }

  playSound (audio) {
    if (this.state.switchedOn) {
      this.setState({ name: audio.parentElement.id })
      audio.volume = this.state.volume
      audio.pause()
      audio.currentTime = 0
      audio.play()
    }
  }

  handlePowerSwitch () {
    const message = this.state.switchedOn ? '' : 'Jam away!'
    this.setState({ name: message }) // show welcome message after switching on
    this.setState({ switchedOn: !this.state.switchedOn })
  }

  handleBankSwitch () {
    const newBank = 1 - this.state.bank // toggles between 0 and 1
    this.setState({ bank: newBank })
  }

  handleVolumeChange (event) {
    const slider = event.target
    this.setState({ volume: slider.valueAsNumber })
  }

  render () {
    return (
      <Wrapper>
        <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet" />
        <Drum id="drum-machine">
          <Pads>
            <DrumPads handleDrumClick={this.handleDrumClick} bank={this.state.bank} />
          </Pads>
          <Controls>
            <ControlPanel
              switchedOn={this.state.switchedOn}
              name={this.state.name}
              handlePowerSwitch={this.handlePowerSwitch}
              handleBankSwitch={this.handleBankSwitch}
              handleVolumeChange={this.handleVolumeChange}
            />
          </Controls>
        </Drum>
      </Wrapper>
    )
  }
}

export default App
