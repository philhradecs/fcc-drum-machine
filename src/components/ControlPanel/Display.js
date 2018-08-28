import React, { Component } from 'react'
import styled from 'styled-components'

const Dsp = styled.div`
	display: flex
	align-items: center
	justify-content: center
	background-color: green
`

class Display extends Component {
	render() {
		return (
			<Dsp>{this.props.name}</Dsp>
		)
	}
}

export default Display