import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Grid = styled.div`
	display: grid;
	grid-gap: 12px;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr 1fr;
	background-color: orange;
`;

class DrumPads extends Component {
	render() {
		return (
			<Grid>
				<Button />
				<Button />
				<Button />
				<Button />
				<Button />
				<Button />
				<Button />
				<Button />
				<Button />
			</Grid>
		);
	}
}

export default DrumPads;