interface PokemonResumo {
  id: number;
  nome: string;
  altura: number;
  peso: number;
}

async function buscarPokemon(
  nomeOuId: string
): Promise<PokemonResumo | null> {

  const url =
    `https://pokeapi.co/api/v2/pokemon/`;

  try {

    const resposta = await fetch(url);

    if (!resposta.ok) {

      console.log(
        "[ERRO] Pokémon não encontrado."
      );

      return null;
    }

    const dados = await resposta.json();

    const pokemon: PokemonResumo = {
      id: dados.id,
      nome: dados.name,
      altura: dados.height,
      peso: dados.weight
    };

    return pokemon;

  } catch (erro) {

    console.log(
      "[ERRO] Não foi possível buscar o Pokémon."
    );

    return null;
  }
}