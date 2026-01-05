import { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
  const pokemonName = args[0];
  if (!pokemonName) {
    throw new Error("You must provide a Pokemon name")
  }
  const pokemon = state.pokedex[pokemonName.toLowerCase()];
  if (!pokemon) {
    console.log("you have not caught that pokemon")
    return
  }
  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);
  console.log(`Stats:`)
  for (const stat of pokemon.stats) {
    console.log(`  -${stat.stat.name}: ${stat.base_stat}`)
  }
  console.log("Types:");
  for (const type of pokemon.types) {
    console.log(`  - ${type.type.name}`)
  }
}
