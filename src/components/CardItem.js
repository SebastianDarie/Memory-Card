import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardItem = ({ img, name, id }) => {
  const colors = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
  ]

  const cardColor = colors[Math.floor(Math.random() * colors.length)]

  return (
    <Card color={cardColor} id={id}>
      <Image className='image-height' src={img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>
    </Card>
  )
}

const generateId = () => {
  return '_' + Math.random().toString(36).substr(2, 9)
}

export const cards = [
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/3/36/latest/20191015215010/Star_Platinum_DU_Infobox_Manga.png',
    name: 'Star Platinum',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/f/f5/latest/20191015213719/The_World_Infobox_Manga.png',
    name: 'The World',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/8/85/latest/20191015214647/King_Crimson_Infobox_Manga.png',
    name: 'King Crimson',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/8/84/latest/20191015214711/Spice_Girl_Infobox_Manga.png',
    name: 'Spice Girl',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/2/20/latest/20191015213258/The_Hand_Infobox_Manga.png/270px-The_Hand_Infobox_Manga.png',
    name: 'The Hand',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/c/ce/latest/20191015214850/Tusk_ACT1_SBR_Infobox_Manga.png/270px-Tusk_ACT1_SBR_Infobox_Manga.png',
    name: 'Tusk',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/9/9b/latest/20200910233857/Silver_Chariot_SC_Infobox_Manga.png/270px-Silver_Chariot_SC_Infobox_Manga.png',
    name: 'Silver Chariot',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/0/01/latest/20191015215856/D4C_Infobox_Manga.png/270px-D4C_Infobox_Manga.png',
    name: 'D4C',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/e/ee/latest/20191015213602/Ball_Breaker_Infobox_Manga.png/270px-Ball_Breaker_Infobox_Manga.png',
    name: 'Ball Breaker',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/f/f3/latest/20191015212908/Weather_Report_Infobox_Manga.png/270px-Weather_Report_Infobox_Manga.png',
    name: 'Weather Report',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/b/bb/latest/20191015214346/Made_in_Heaven_Infobox_Manga.png/270px-Made_in_Heaven_Infobox_Manga.png',
    name: 'Made In Heaven',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/6/62/latest/20191015215234/Whitesnake_Infobox_Manga.png/270px-Whitesnake_Infobox_Manga.png',
    name: 'Whitesnake',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/2/24/latest/20200812204856/Stone_Free_Infobox_Manga.png/270px-Stone_Free_Infobox_Manga.png',
    name: 'Stone Free',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/1/13/latest/20191015213655/GER_Infobox_Manga.png/270px-GER_Infobox_Manga.png',
    name: 'GER',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/f/fb/latest/20191015214252/Killer_Queen_Infobox_Manga.png',
    name: 'Killer Queen',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/b/be/latest/20191230113743/Aerosmith_Infobox_Manga.jpg/270px-Aerosmith_Infobox_Manga.jpg',
    name: 'Aerosmith',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/8/82/latest/20191015213758/Purple_Haze_Infobox_Manga.png/270px-Purple_Haze_Infobox_Manga.png',
    name: 'Purple Haze',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/3/34/latest/20191015214101/C-Moon_Infobox_Manga.png/270px-C-Moon_Infobox_Manga.png',
    name: 'C-Moon',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/c/c5/latest/20200625184236/Crazy_Diamond_Infobox_Manga.png/270px-Crazy_Diamond_Infobox_Manga.png',
    name: 'Crazy Diamond',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/f/f1/latest/20200825012307/Kiss_Infobox_Manga.jpg/270px-Kiss_Infobox_Manga.jpg',
    name: 'Kiss',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/5/55/latest/20200930232559/Soft_%26_Wet_Infobox_Manga.png/270px-Soft_%26_Wet_Infobox_Manga.png',
    name: 'Soft and Wet',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/8/8e/latest/20191015215027/Hierophant_Green_Infobox_Manga.png/270px-Hierophant_Green_Infobox_Manga.png',
    name: 'Hierophant Green',
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/d/de/latest/20191228045732/Heaven%27s_Door_Infobox_Manga.png/270px-Heaven%27s_Door_Infobox_Manga.png',
    name: "Heaven's Door",
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/6/6d/latest/20191015213113/Dragon%27s_Dream_Infobox_Manga.png/270px-Dragon%27s_Dream_Infobox_Manga.png',
    name: "Dragon's Dream",
  },
  {
    id: generateId(),
    img:
      'https://static.jojowiki.com/images/thumb/d/d4/latest/20200710184851/Paisley_Park_Infobox_Manga.png/300px-Paisley_Park_Infobox_Manga.png',
    name: 'Paisley Park',
  },
]

export default CardItem
