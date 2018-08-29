import React, { Component } from 'react'
import styled from 'styled-components'

const Toggle = styled.input`
	& {
		appearance: none;
		width: 6em;
		height: 3em;
		border-radius: 3em;
		background-color: #ddd;
		outline: 0;
		cursor: pointer;
		transition: background-color 0.09s ease-in-out;
		position: relative;
		}
	&:after {
		content: "";
		width: 3em;
		height: 3em;
		border-radius: 3em;
		background-color: white;
		position: absolute;
		transform: scale(0.8);
		left: 0;
		transition: left 0.09s ease-in-out;
	}
	&:checked {
		background-color: #3af;
	}
	&:checked:after {
			left: 3em;
	}
`

class Switch extends Component {
	render() {
		return (
			<Toggle type="checkbox" onChange={this.props.handleChange}></Toggle>
		)
	}
}

export default Switch