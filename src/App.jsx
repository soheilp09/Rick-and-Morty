import { useState } from 'react';
import { allCharacters } from '../data/data';
import './App.css'
import CharacterDetail from './components/CharacterDetail'
import CharacterList from './components/CharacterList'
import Header from './components/Header'

function App() {

  const [characters,setCharacters] = useState(allCharacters);


  return (
  
    <div className='app container '>
      <Header ResultLength={characters.length} />
      <div className='main'>

      <CharacterList characters={characters}/>

      <CharacterDetail />
      </div>
    
    </div>

  )
}

export default App
