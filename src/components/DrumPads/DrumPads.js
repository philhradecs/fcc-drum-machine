import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './Button'
import soundData from './soundData.js'

const Grid = styled.div`
  display: grid;
  grid-gap: 18px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 12px 0 0 12px;
  height: 100%;
  box-sizing: border-box;
  padding: 12px;
`

class DrumPads extends Component {
  render () {
    return (
      <Grid>
        {soundData[this.props.bank].map(btnData => {
          return (
            <Button key={btnData.id} data={btnData} handleDrumClick={this.props.handleDrumClick} />
          )
        })}
      </Grid>
    )
  }
}

export default DrumPads
