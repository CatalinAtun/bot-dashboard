import React from 'react';
import { Header, Spacing, Text, Tiles } from '@cornershop/cornponents';
import ModuleCard from './modules'
import * as st from './styles';

const user = [
  {
    id: 1,
    avatar: 'https://ca.slack-edge.com/T04DMF037-UJBDD2ZRV-e4961aa8b753-512',
    username: 'Rafael Poveda',
    score: 2,
    firstPlace: 0,
    secondPlace: 2
  },
  {
    id: 2,
    avatar: 'https://ca.slack-edge.com/T04DMF037-UTFEZ007N-212eb148ff01-512',
    username: 'Nicolás Cofré',
    score: 1,
    firstPlace: 2,
    secondPlace: 2
  },
  {
    id: 3,
    avatar: 'https://ca.slack-edge.com/T04DMF037-U011YTD481L-8c68ab1d4d9c-512',
    username: 'Catalina Campos',
    score: -1,
    firstPlace: 2,
    secondPlace: 2
  },
  {
    id: 4,
    avatar: 'https://ca.slack-edge.com/T04DMF037-U0137BDV54N-8b33b41ecdb7-512',
    username: 'Felipe Morales',
    score: 5,
    firstPlace: 2,
    secondPlace: 2
  },
  {
    id: 5,
    avatar: 'https://ca.slack-edge.com/T04DMF037-U016SMYE6BE-2dbfd1ab96ba-512',
    username: 'Daniel Camargo',
    score: 6,
    firstPlace: 2,
    secondPlace: 2
  },
  {
    id: 6,
    avatar: 'https://ca.slack-edge.com/T04DMF037-U01BQ29PJTE-03b6e8c8e754-512',
    username: 'Felipe Souza',
    score: 0,
    firstPlace: 1,
    secondPlace: 2
  },
  {
    id: 7,
    avatar: 'https://ca.slack-edge.com/T04DMF037-U01R9G3LQD9-fca985204d3e-512',
    username: 'Gabriela da Silva Pinheiro',
    score: 1,
    firstPlace: 0,
    secondPlace: 0
  },
  {
    id: 3,
    avatar: 'https://ca.slack-edge.com/T04DMF037-U01RYRYAG72-2015a68b7dc9-512',
    username: 'Jaime Guamán',
    score: 0,
    firstPlace: 0,
    secondPlace: 0
  } 
];

function App() {
  return (
    <st.Container>
      <Header appName="Testing App" />
        <Spacing py="large" px="xxlarge">
          <Text size="2xl">Team 🤝</Text>
          <Tiles columns="5-col">
            {(user ?? []).map(el => <ModuleCard {...el} key={el.id}/>)}
          </Tiles>
        </Spacing>
    </st.Container>
  );
}

export default App;
