import PropTypes from "prop-types";

function NavBar({ setPokemonIndex, pokemonList }) {
  const handlePokemonClick = (pokemon, index) => {
    if (pokemon.name === "pikachu") {
      alert("⚡ Pika pikaaa pi⚡!!");
    }
    setPokemonIndex(index);
  };

  return (
    <header>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          onClick={() => handlePokemonClick(pokemon, index)}
        >
          {pokemon.name}
        </button>
      ))}
    </header>
  );
}

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.array.isRequired,
};
export default NavBar;
