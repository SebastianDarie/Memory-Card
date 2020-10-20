import React from 'react'
import { Grid } from 'semantic-ui-react'

const ScoreBoard = ({ score, bestScore }) => {
  return (
    <Grid columns={2} className='score'>
      <Grid.Row className='score'>
        <Grid.Column>
          <h6>Score: {score}</h6>
        </Grid.Column>
        <Grid.Column>
          <h6>Best Score: {bestScore}</h6>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default ScoreBoard
