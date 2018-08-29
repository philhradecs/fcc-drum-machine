import React, { Component } from 'react'
import styled from 'styled-components'

const Toggle = styled.input`
	& {
		appearance: none;
		width: 6em;
		height: 3em;
		border-radius: 3em;
		background-color: #bbb;
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
		background-color: #a44;
	}
	&:checked:after {
			left: 3em;
	}
`

const Label = styled.div`
	font-size: 1em;
	color: white;
`

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`

class Switch extends Component {
	render() {
		return (
			<Wrapper>
				<Label>{this.props.labelLeft}</Label>
				<Toggle type="checkbox" onChange={this.props.handleChange} />
				<Label>{this.props.labelRight}</Label>
			</Wrapper>
		)
	}
}

export default Switch