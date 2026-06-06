import { PokemonResumo }
from "../models/Pokemon.js";

async function buscarPokemon(  nomeOuId: string): Promise<PokemonResumo | null> {

  try {

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/`
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    const pokemon: PokemonResumo = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight
    };

    return pokemon;

  } catch (error){
        if (error instanceof APIError){
            throw error
        }
            throw new APIError('Falha de comunicação com API')
    }
}