import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  return (
    <figure>
      <figcaption>{pokemon.name}</figcaption>

      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
    </figure>
  );
}
PokemonCard.propTypes = {
  pokemonList: PropTypes.arrayOf({
    imgSrc: PropTypes.shape,
    name: PropTypes.string.isRequired,
  }),
};
export default PokemonCard;
