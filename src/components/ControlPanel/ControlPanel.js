import React, { Component } from 'react'
import styled from 'styled-components'
import Display from './Display'
import Settings from './Settings/Settings'

const PanelWrapper = styled.div`
	display: grid
	grid-template-rows: 120px 1fr
	grid-template-columns: 1fr
	background-color: brown
`

class ControlPanel extends Component {
	render() {
		return (
			<PanelWrapper>
				<Display switchedOn={this.props.switchedOn} name={this.props.name} />
				<Settings handlePowerSwitch={this.props.handlePowerSwitch} handleBankSwitch={this.props.handleBankSwitch}/>
			</PanelWrapper>
		)
	}
}

export default ControlPanel