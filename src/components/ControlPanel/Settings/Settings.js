import React, { Component } from 'react'
import styled from 'styled-components'
import Switch from './Switch'
import VolumeSlider from './VolumeSlider'

const SettingsWrapper = styled.div`
  background-color: gray;
  color: lightblue;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
`

class Settings extends Component {
  render () {
    return (
      <SettingsWrapper>
        <Switch handleChange={this.props.handlePowerSwitch} labelLeft="Off" labelRight="On" />
        <VolumeSlider handleChange={this.props.handleVolumeChange} />
        <Switch handleChange={this.props.handleBankSwitch} labelLeft="Bank 1" labelRight="Bank 2" />
      </SettingsWrapper>
    )
  }
}

export default Settings
