import React, { Component } from 'react'
import styled from 'styled-components'

const Slider = styled.div`
  background-color: brown;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const sliderStyle = {
  width: '200px',
  outline: 'none'
}

class VolumeSlider extends Component {
  render () {
    return (
      <Slider>
        <input
          type="range"
          min="0"
          max="1"
          defaultValue="0.5"
          step="0.01"
          onChange={this.props.handleChange}
          style={sliderStyle}
        />
      </Slider>
    )
  }
}

export default VolumeSlider
