import React from 'react'
import { Grid } from 'semantic-ui-react'
import ScoreBoard from './ScoreBoard'

const Nav = ({ score, bestScore }) => {
  return (
    <nav className='navbar'>
      <Grid columns={3} className='main-grid'>
        <Grid.Row>
          <Grid.Column className='title'>
            <h2>Jojo Stands Memory Game</h2>
            <p>
              Get points by clicking on an image but don't click on any more
              than once!
            </p>
          </Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column className='score'>
            <ScoreBoard score={score} bestScore={bestScore} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </nav>
  )
}

export default Nav
