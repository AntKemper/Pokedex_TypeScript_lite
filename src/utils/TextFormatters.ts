import { PokemonResume } from "../models/Pokemon.js";

export function formatarNome(nome: string): string {
  return nome.trim().toLowerCase();
}

export function formatarPokemon(pokemon: PokemonResume): string {
  return `${pokemon.id} - ${pokemon.name} | Tipos: ${pokemon.types} | Altura: ${pokemon.height} | Peso: ${pokemon.weight}`;
}

