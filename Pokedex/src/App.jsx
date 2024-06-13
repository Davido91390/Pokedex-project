import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  const pokemonIndex = useState(0);
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <>
      <PokemonCard pokemon={pokemonList[0]} />
    </>
  );
}

export default App;
