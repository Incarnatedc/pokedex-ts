import { State } from "./state.js";

export async function commandPokedex(state: State) {
  const pokedex = state.pokedex;
  if (Object.keys(pokedex).length === 0) {
    console.log("Your Pokedex is empty");
    return;
  }
  console.log("Your Pokedex:");
  for (const pokemonName in pokedex) {
    if (pokedex.hasOwnProperty(pokemonName)) {
      const pokemon = pokedex[pokemonName];
      console.log(` - ${pokemon.name}`)
    }
  }
}
