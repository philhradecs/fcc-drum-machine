import React, { Component } from 'react'
import styled from 'styled-components'

const Dsp = styled.div`
	background-color: green
`

class Display extends Component {
	render() {
		return (
			<Dsp>Display</Dsp>
		)
	}
}

export default Display