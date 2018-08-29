import React, { Component } from "react"
import styled from 'styled-components'

const Pad = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ddd;
	box-shadow: 2px 1px 5px #666;
	border-radius: 3px;
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
