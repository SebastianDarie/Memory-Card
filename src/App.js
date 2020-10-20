import React, { useState, useEffect } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Nav from './components/Nav'
import CardItem, { cards } from './components/CardItem'
import './App.css'

function App() {
  const [cardData, setCardData] = useState(cards)
  const [clickedCards, setClickedCards] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  useEffect(() => {
    setCardData(shuffleCards(cardData))
    // eslint-disable-next-line
  }, [])

  const shuffleCards = (arr) => {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1))
      ;[newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
    }
    return newArr
  }

  const clickHandler = (id) => {
    if (!clickedCards.includes(id)) {
      setScore(score + 1)
      setClickedCards([...clickedCards, id])
    } else if (score > bestScore) {
      setBestScore(score)
      setScore(0)
      setClickedCards([])
    } else {
      setScore(0)
      setClickedCards([])
    }

    setCardData(shuffleCards(cardData))
  }

  return (
    <Container className='full-width'>
      <Nav score={score} bestScore={bestScore} />
      <Container className='card-container'>
        <Grid>
          <Grid.Row>
            {cardData.map((card) => (
              <Grid.Column width={3} className='card' key={card.id}>
                <CardItem
                  img={card.img}
                  name={card.name}
                  id={card.id}
                  clickHandler={clickHandler}
                />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </Container>
  )
}

export default App
