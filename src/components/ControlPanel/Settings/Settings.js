import React, { Component } from 'react';
import styled from 'styled-components';
import Switch from './Switch';
import VolumeSlider from './VolumeSlider';

const SettingsWrapper = styled.div`
	background-color: gray;
	color: lightblue;
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-columns: 1fr;
`;

class Settings extends Component {
	render() {
		return (
			<SettingsWrapper>
				<Switch />
				<VolumeSlider />
				<Switch />
			</SettingsWrapper>
		);
	}
}

export default Settings;