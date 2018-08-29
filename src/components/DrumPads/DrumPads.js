import React, { Component } from "react"
import styled from "styled-components"
import Button from "./Button"

const Grid = styled.div`
	display: grid
	grid-gap: 12px
	grid-template-rows: 1fr 1fr 1fr
	grid-template-columns: 1fr 1fr 1fr
	background-color: orange
`

const data = [
	[
		{ id: "Q", src: "#", name: "Q" },
		{ id: "W", src: "#", name: "W" },
		{ id: "E", src: "#", name: "E" },
		{ id: "A", src: "#", name: "A" },
		{ id: "S", src: "#", name: "S" },
		{ id: "D", src: "#", name: "D" },
		{ id: "Z", src: "#", name: "Z" },
		{ id: "X", src: "#", name: "X" },
		{ id: "C", src: "#", name: "C" }
	],
	[
		{ id: "Q", src: "#", name: "Q*" },
		{ id: "W", src: "#", name: "W*" },
		{ id: "E", src: "#", name: "E*" },
		{ id: "A", src: "#", name: "A*" },
		{ id: "S", src: "#", name: "S*" },
		{ id: "D", src: "#", name: "D*" },
		{ id: "Z", src: "#", name: "Z*" },
		{ id: "X", src: "#", name: "X*" },
		{ id: "C", src: "#", name: "C*" }
	]
]

class DrumPads extends Component {
	render() {
		debugger
		return (
			<Grid>
				{data[this.props.bank].map(btnData => {
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
