import { getImage } from '../../utils';

export const mapPokemonApiToPokemonView = (pokemon) => {
  return pokemon.map((pokemonItem, index) => {
    return {
      name: pokemonItem.name,
      imageUrl: getImage(index + 1),
      id: index + 1
    };
  });
};
