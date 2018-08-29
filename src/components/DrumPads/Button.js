import React, { Component } from "react"
import styled from 'styled-components'

const Pad = styled.div`
	display: flex
	align-items: center
	justify-content: center
	background-color: #ABC
`

class Button extends Component {
	render() {
		const id = this.props.data.id
		const src = this.props.data.src
		const name = this.props.data.name
		return (
			<Pad className="drum-pad" onClick={this.props.handleDrumClick} id={name}>
				{id}
				<audio src={src} id={id} className="clip" preload="auto"/>
			</Pad>
		)
	}
}

export default Button
