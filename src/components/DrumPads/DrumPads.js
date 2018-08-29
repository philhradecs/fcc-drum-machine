import React, { Component } from "react"
import styled from "styled-components"
import Button from "./Button"
import soundData from "./soundData.js"

const Grid = styled.div`
	display: grid;
	grid-gap: 16px;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 22px;
	border-radius: 12px 0 0 12px;
`

class DrumPads extends Component {
	render() {
		return (
			<Grid>
				{soundData[this.props.bank].map(btnData => {
					return (
						<Button
							key={btnData.id}
							data={btnData}
							handleDrumClick={this.props.handleDrumClick}
						/>
					)
				})}
			</Grid>
		)
	}
}

export default DrumPads
