import React, {useState} from 'react'
import './App.css';
import axios from 'axios';

function App() {

  const [pokeBois, setPokeBois] = useState([])

  const fetchPoke = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
          return response.data;
      }).then(response2 => {
          console.log(response2.results);
          setPokeBois(response2.results)
      }).catch(err=>{
          console.log(err);
      })
  }

  return (
    <div className="App">
      {/* {JSON.stringify(pokeBois)} */}
      <button onClick={() => fetchPoke()}>Fetch</button>
      <ul>
        {pokeBois.map((pokemon, i)=>{
          return (
            <li key={i}>{pokemon.name}</li>
          )
        })}

      </ul>
    </div>
  );
}

export default App;
