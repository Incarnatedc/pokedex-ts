import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  const pokemonName = args[0];
  if (!pokemonName) {
    throw new Error("You must provide a Pokemon name")
  }
  console.log(`Throwing a Pokeball at ${pokemonName}...`);
  const pokemon = await state.pokeAPI.fetchPokemon(pokemonName)
  const MAX_EXP_SCALE = 300;
  const difficulty = pokemon.base_experience / MAX_EXP_SCALE;

  const roll = Math.random();
  if (roll > difficulty) {
    console.log(`${pokemonName} was caught!`)
    state.pokedex[pokemon.name] = pokemon;
    console.log("You may now inspect it with the inspect command.")
  } else {
    console.log(`${pokemonName} escaped!`)
  }
}
