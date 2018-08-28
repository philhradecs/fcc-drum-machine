import React, { Component } from 'react'
import styled from 'styled-components'

const Slider = styled.div`
	background-color: brown
	color: white
`

class VolumeSlider extends Component {
	render() {
		return (
			<Slider>------------|---</Slider>
		)
	}
}

export default VolumeSlider