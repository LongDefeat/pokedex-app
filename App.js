import './App.css';
import Pokedex from './Pokedex';
import pokemon from './pokemon';

function App() {
  return (
    <div className="App">
      <h1 className="Pokedex-title">Pokedex</h1>
      <Pokedex pokemon={pokemon}/>
    </div>
  );
}

export default App;
