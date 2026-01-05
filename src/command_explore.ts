import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
  const location = args[0];
  if (!location) {
    throw new Error("You must provide a location name");
  }
  console.log(`Exploring ${location}...`)
  const results = await state.pokeAPI.fetchLocation(location);
  const pokemon_encounters = results.pokemon_encounters;
  if (!pokemon_encounters) {
    console.log("Pokemon not found");
    return;
  }
  console.log("Found Pokemon");
  for (const enc of pokemon_encounters) {
    console.log(` - ${enc.pokemon.name}`)
  }
}
