import "./App.css";
import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const getPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((serverResponse) => {
        console.log(serverResponse.data.results);
        const pokemonNames = serverResponse.data.results.map(
          (pokemon) => pokemon.name
        );
        setPokemonList(pokemonNames);
      })
      .catch((error) => console.log(error));
  };

  return (
    <fieldset>
      <div className="container">
        <legend>App.jsx</legend>
        <div className="d-flex justify-content-center mb-3">
          <button className="btn btn-warning" onClick={getPokemon}>
            Fetch All Pokemon
          </button>
        </div>
        <div className="text-center">
          {pokemonList.map((pokemon, idx) => {
            pokemon = pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
            return <p key={idx}>{pokemon}</p>;
          })}
        </div>
      </div>
    </fieldset>
  );
}

export default App;
