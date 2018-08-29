import React, { Component } from 'react'
import styled from 'styled-components'

const Dsp = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${props => (props.switchedOn ? 'Chartreuse' : 'green' )};
	transition: background-color 0.06s ease-in-out;
`

class Display extends Component {
	render() {
		return (
			<Dsp switchedOn={this.props.switchedOn}>{this.props.name}</Dsp>
		)
	}
}

export default Display