export type PokemonCardData = {
  id: number;
  name: string;
  image: string;
  types: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
    total: number;
  };
};

export const fakePokemonList: PokemonCardData[] = [
  {
    id: 1,
    name: "Bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    types: ["grass", "poison"],
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      special_attack: 65,
      special_defense: 65,
      speed: 45,
      total: 318,
    },
  },
  {
    id: 4,
    name: "Charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
    types: ["fire"],
    stats: {
      hp: 39,
      attack: 52,
      defense: 43,
      special_attack: 60,
      special_defense: 50,
      speed: 65,
      total: 309,
    },
  },
  {
    id: 7,
    name: "Squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
    types: ["water"],
    stats: {
      hp: 44,
      attack: 48,
      defense: 65,
      special_attack: 50,
      special_defense: 64,
      speed: 43,
      total: 314,
    },
  },
  {
    id: 25,
    name: "Pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
    types: ["electric"],
    stats: {
      hp: 35,
      attack: 55,
      defense: 40,
      special_attack: 50,
      special_defense: 50,
      speed: 90,
      total: 320,
    },
  },
  {
    id: 39,
    name: "Jigglypuff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg",
    types: ["normal", "fairy"],
    stats: {
      hp: 115,
      attack: 45,
      defense: 20,
      special_attack: 45,
      special_defense: 25,
      speed: 20,
      total: 270,
    },
  },
  {
    id: 52,
    name: "Meowth",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/52.svg",
    types: ["normal"],
    stats: {
      hp: 40,
      attack: 45,
      defense: 35,
      special_attack: 40,
      special_defense: 40,
      speed: 90,
      total: 290,
    },
  },
  {
    id: 133,
    name: "Eevee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/133.svg",
    types: ["normal"],
    stats: {
      hp: 55,
      attack: 55,
      defense: 50,
      special_attack: 45,
      special_defense: 65,
      speed: 55,
      total: 325,
    },
  },
  {
    id: 150,
    name: "Mewtwo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg",
    types: ["psychic"],
    stats: {
      hp: 106,
      attack: 110,
      defense: 90,
      special_attack: 154,
      special_defense: 90,
      speed: 130,
      total: 680,
    },
  },
  {
    id: 151,
    name: "Mew",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg",
    types: ["psychic"],
    stats: {
      hp: 100,
      attack: 100,
      defense: 100,
      special_attack: 100,
      special_defense: 100,
      speed: 100,
      total: 600,
    },
  },
  {
    id: 94,
    name: "Gengar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/94.svg",
    types: ["ghost", "poison"],
    stats: {
      hp: 60,
      attack: 65,
      defense: 60,
      special_attack: 130,
      special_defense: 75,
      speed: 110,
      total: 500,
    },
  },
];
