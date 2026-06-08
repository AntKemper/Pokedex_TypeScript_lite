import {PokemonResume, PokemonApiResponse} from "../models/Pokemon.js";

import APIError from "../models/CustomErro.js";


async function buscarPokemon(  nomeOuId: string): Promise<PokemonResume | null> {

  try {

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/`
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    const pokemon: PokemonResume = {
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
            throw new APIError('Falha de comunicação com a API', 500);
    }
}


//Mapear a API response para o formato do PokemonResume, ou seja, para criar um objeto do tipo PokemonResume a partir dos dados retornados pela API.


mapearPokemon(dados: PokemonApiResponse): PokemonResume {
    const tipos = dados.types.map((item) => item.type.name);

    const encontrarStat = (nomeStat: string): number => {
      const statEncontrado = dados.stats.find((item) => item.stat.name === nomeStat);
      return statEncontrado?.base_stat ?? 0;
    };

    return {
      id: dados.id,
      nome: dados.name,
      tipos,
      altura: dados.height,
      peso: dados.weight,
    };
  }
}




