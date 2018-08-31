import React, { Component } from 'react'
import styled from 'styled-components'

const Dsp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  background-color: ${props => (props.switchedOn ? 'Chartreuse' : 'green')};
  transition: background-color 0.06s ease-in-out;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5em;
  border-radius: 4px;
`

class Display extends Component {
  render () {
    return (
      <Dsp switchedOn={this.props.switchedOn} id="display">
        {this.props.name}
      </Dsp>
    )
  }
}

export default Display
