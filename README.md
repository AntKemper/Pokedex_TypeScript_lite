Podédex Typescript lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma BackEnd em Node.js com TypeScript que realiza uma consulta dados de Pokémon na PokeAPI, organizando os Pokemons encontrados em um catálogo local.

# Objetivo

Praticar os principais conceitos do Módulo 01:
- Node.js;
- JavaScript no back-end;
- TypeScript;
- interfaces;
- funções tipadas;
- arrays;
- objetos;
- JSON;
- métodos de array;
- classes;
- async/await;
- fetch;
- tratamento de erros;
- GitHub;
- GitFlow;
- Kanban.

# Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git

# Como instalar

Clone o Repositorio 

Antes de executar o projeto, é necessário ter instalado:
- Node.js
- npm
- Git

Como instalar
Clone o repositório:

No terminal bash, realize os seguintes passos para execusão:

git clone https://github.com/AntKemper/Pokedex_TypeScript_lite.git
Acesse a pasta do projeto:
cd pokedex-typescript-lite
Instale as dependências:
npm install
Como executar
Execute o projeto em ambiente de desenvolvimento:

npm run dev
Estrutura do projeto
<img width="382" height="530" alt="image" src="https://github.com/user-attachments/assets/7e91b168-824b-4b4c-acde-a3e54180491e" />


# Funcionalidades

- Buscar Pokémon por nome ou ID
- Tratar erro de Pokémon inexistente

Transformar resposta da API em objeto simplificado
- Adicionar Pokémon ao catálogo local
- Impedir Pokémon duplicado
- Listar catálogo
- Remover Pokémon por ID
- Exibir mensagens no terminal
- Exemplos de execução
- Busca válida

Entrada testada:
pikachu
Saída obtida:
[OK] Pokémon encontrado: pikachu
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
Busca inválida
Entrada testada:
pokemon-inexistente
Saída obtida:
[ERRO] Pokémon não encontrado.
Duplicidade
Entrada testada:
adicionar pikachu duas vezes
Saída obtida:
[Aviso] pikachu já está no catálogo.
Remoção
Entrada testada:
remover ID 25
Saída obtida: 
[OK] Pokémon removido do catálogo.

# Conceitos aplicados

- TypeScript
- Explique onde foram utilizados tipos, interfaces, parâmetros  e retornos tipados

# Interface PokemonResumo

Interface criada a partir do conceito de Em TypeScript, uma interface é usada para definir a estrutura de um objeto, como uma especie de contrato a ser realizado trazendo apenas os dados solicitados.


## Fetch e async/await

Metodo utilizado para buscar dados armazenados em https://pokeapi.co/api/v2/pokemon, buscando apenas o nescessario informado na Interface.

Async é um metodo utilizado para transformar uma funcção em funçao asincrona, que atravez do await, pausa a função até que o retorno da busca seja recebido. 

## Tratamento de erros

Erros pode ser gerados por problemas com o servidor ou buscas inexistente, serão retornados como mensagem, "Falha de comunicação com a API', 500", ou "Pokemon não encontrato" em caso de busca sem sucesso.


## Demais procedimentos

As buscas serão armazenadas em um array que pode ser consultado.

Metodos como Map e find foram utilizados na PokeApiService para realizar a busca de cada pokemon

Informe onde foram usados map, filter, find, some, every, reduce ou
forEach.

Link do Kanban:
https://trello.com/b/WIRIplIT/projeto-pokeapi


Branches utilizadas
- main
- develop
- feature/model_product
