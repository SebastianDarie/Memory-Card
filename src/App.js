import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Nav from './components/Nav'
import CardItem, { cards } from './components/CardItem'
import './App.css'

function App() {
  return (
    <Container className='full-width'>
      <Nav />
      <Container className='card-container'>
        <Grid>
          <Grid.Row>
            {cards.map((card) => (
              <Grid.Column width={3} className='card' key={card.id}>
                <CardItem img={card.img} name={card.name} id={card.id} />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </Container>
  )
}

export default App
