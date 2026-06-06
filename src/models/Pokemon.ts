  export interface PokemonResume { 
  id: number;
  name: string;
  types: string[];
  height: number;
  weight: number;
} 

export interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { 
    type: { name: string
     };
     }[];
} 

}

// Deve se implementar a interface em uma classe para poder para definir os valores das propriedades, ou seja, para criar um objeto do tipo PokemonResume.

//usar no service para definir o tipo do retorno da função buscarPokemons, ou seja, para dizer que a função retorna um objeto do tipo PokemonResume.


