
import { Toaster } from 'react-hot-toast';
import './App.css'
import CharacterDetail from './components/CharacterDetail'
import CharacterList from './components/CharacterList'
import Header from './components/Header'
import useCharacters from './hooks/useCharacters';


function App() {

 
  const {characters,isLoading} = useCharacters("https://rickandmortyapi.com/api/character")


  return (
  <>
    <Toaster/>
    <div className='app container '>
      <Header ResultLength={characters.length} />
      <div className='main'>

      <CharacterList isLoading={isLoading} characters={characters}/> 

      <CharacterDetail />
      </div>
    
    </div>
    </>

  )
}

export default App
