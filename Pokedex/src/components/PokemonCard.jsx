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
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
export default PokemonCard;
