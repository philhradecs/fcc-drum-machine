import React, { Component } from 'react'
import styled from 'styled-components'

const Dsp = styled.div`
	display: flex
	align-items: center
	justify-content: center
	background: green
	${({ switchedOn }) => switchedOn && `
		background: Chartreuse
	`}
`

class Display extends Component {
	render() {
		return (
			<Dsp switchedOn={this.props.switchedOn}>{this.props.name}</Dsp>
		)
	}
}

export default Display