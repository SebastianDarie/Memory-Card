import React from 'react'
import { Grid } from 'semantic-ui-react'

const ScoreBoard = () => {
  return (
    <Grid columns={2} className='score'>
      <Grid.Row className='score'>
        <Grid.Column>
          <h6>Score: 0</h6>
        </Grid.Column>
        <Grid.Column>
          <h6>Best Score: 0</h6>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default ScoreBoard
