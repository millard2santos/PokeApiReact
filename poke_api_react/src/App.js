
import './App.css';
import {pokemons} from './pokemon'
import Pokemon from './components/Pokemon/Pokemon.jsx';



function App() {



  return (
    <section>
      
    {
      pokemons.map((e,i)=> <Pokemon key={i} pokemon={e}/>)
    }
    </section>
  )
}

export default App;
