<p align="center">
  <img src="https://github.com/user-attachments/assets/f212a408-83c1-4c5e-97f5-c771a1d67861" width="200" />
</p>

# Apresentação

Aplicação **Pokédex** criada como code challenge: lista Pokémons via PokéAPI e exibe detalhes (imagem, tipos, stats) com rolagem infinita. Foco em performance, arquitetura em camadas e acessibilidade.

## Principais tecnologias

* **React** – UI declarativa.
* **TanStack React Query** – dados assíncronos com cache, suspense e infinite queries.
* **TanStack Router** – roteamento declarativo e lazy loading.
* **Axios** – cliente HTTP com `AxiosHttpClientAdapter`.
* **Tailwind CSS** – utilitários de layout responsivo.
* **Radix UI** – componentes acessíveis (modal, dialog).
* **i18next** – internacionalização (PT/EN).
* **TanStack Virtual** – virtualização de listas.

## Como executar

1. Clone o repositório e instale dependências:

   ```bash
   git clone https://github.com/ramonmello/coding-challenge-pokedex.git pokedex
   cd pokedex
   pnpm install
   ```
2. Crie `.env` na raiz:

   ```
   VITE_API_URL=https://pokeapi.co/api/v2
   ```
3. Ambiente de desenvolvimento:

   ```bash
   pnpm dev   # http://localhost:3000
   ```
4. Build de produção (opcional):

   ```bash
   pnpm build
   pnpm serve # serve ./dist
   ```

## Estrutura de pastas

```text
├── src
│   ├── main/
│   │   ├── index.tsx             # Ponto de entrada React (renderização do <App />) 
│   │   ├── App.tsx               # Componente raiz que agrega providers globais (QueryClient, i18n, Router) 
│   │   ├── config/               # Configurações globais
│   │   │   ├── i18n/             # Configuração de internacionalização (arquivos JSON, detector de idioma) 
│   │   │   └── styles/           # Estilos globais (Tailwind, resets) 
│   │   └── router/               # Definição de rotas principais com TanStack Router 
│   ├── core/
│   │   ├── domain/               # Tipos genéricos e lógicas de domínio (Either, exceptions) 
│   │   ├── application/          # Protocolos e respostas HTTP genéricas (HttpResponse, ServiceCommand) 
│   │   ├── infra/
│   │   │   └── http/             # Adaptador HTTP AxiosHttpClientAdapter e configurações de cliente HTTP 
│   │   └── query/                # Helpers de integração com React Query (serviceOptions, serviceInfiniteOptions) 
│   └── app/
│       ├── shared/
│       │   ├── components/       # UI reutilizáveis (Buttons, Cards, Layout) 
│       │   ├── hooks/            # Hooks genéricos (useTranslation, useMediaQuery) 
│       │   ├── types/            # Tipos comuns 
│       │   └── utils/            # Funções utilitárias (cn, make-api-url) 
│       └── features/
│           ├── general/
│           │   ├── presentation/  # Páginas genéricas (Maintenance, NotFound) 
│           │   └── router/         # Rotas da feature general (e.g., /maintenance) 
│           └── pokemon/
│               ├── application/   # Serviços da feature e mapeamento DTO->domínio (GetPokemonList, GetPokemonDetails) 
│               │   ├── dtos/       # Definições de Data Transfer Objects para a API PokéAPI 
│               │   └── api/        # Constantes de rotas e endpoints da API (POKEMON_API_ROUTES) 
│               ├── domain/        # Modelos de domínio (PokemonListItem, PokemonDetails) 
│               ├── presentation/  # Componentes e telas React (PokemonListScreen, PokeCard, PokemonDetailsModal) 
│               ├── queries/       # Configurações de React Query (pokemonListQueryOptions, pokemonDetailsQueryOptions) 
│               └── router/        # Rotas específicas da Pokédex (/ e /search/:name) 
├── public/
│   ├── locales/                  # Arquivos de tradução JSON (pt.json, en.json) 
│   └── assets/                   # Imagens e ícones usados na aplicação 
├── package.json                  # Dependências e scripts do projeto 
└── README.md                     # Documentação do projeto
```

## Proposta arquitetural

### Infrastructure

A camada **Infra** gerencia toda a comunicação externa: configura o cliente HTTP (por exemplo, `AxiosHttpClientAdapter`), implementa cache e define armazenamento local. Seu papel é garantir eficiência, resiliência e independência das demais camadas ao lidar com integrações.

### Application

A camada **Application** orquestra os casos de uso do sistema. Ela recebe dados da Infra, valida fluxos, converte DTOs em objetos de domínio e encapsula regras de negócio sutis. Essa camada garante que a lógica central seja aplicada corretamente antes de expor funcionalidades à camada superior.

### Domain

A camada **Domain** contém entidades, modelos e regras puras de negócio. Aqui reside a lógica mais crítica, isolada de detalhes de infraestrutura ou apresentação, permitindo testes unitários focados e evolução segura das regras de negócio.

### Presentation

A camada **Presentation** é responsável pela interface com o usuário. Ela implementa componentes React, gerencia estados locais de UI, acessibilidade e layout, consumindo os serviços da camada de Aplicação para exibir dados e reagir a interações.

Interfaces bem definidas entre as camadas permitem testes unitários isolados e a substituição de implementações sem impacto lateral.

## Visão geral

### Main

A camada **Main** serve como porta de entrada da aplicação React: aqui são inicializados os provedores essenciais, como o `QueryClientProvider` para gerenciamento de dados, o roteador para navegação declarativa e o `i18next` para internacionalização. Além disso, configura-se o sistema de notificações (toasts) e quaisquer wrappers globais que envolvem toda a árvore de componentes.

### Core

A camada **Core** consolida toda a infraestrutura genérica e contratos compartilháveis necessários para a aplicação. Nessa camada residem os adaptadores HTTP (como `AxiosHttpClientAdapter`), definições de tipos e estruturas utilitárias (por exemplo, `Either` e modelos de exceções) e helpers que integram serviços de aplicação ao React Query, garantindo um ponto único de manutenção para comunicação externa e cache.

### App

A camada **App** concentra o núcleo de funcionalidades da Pokédex, reunindo componentes, hooks e lógica específicos de domínio. É nela que estão organizadas as features do projeto, cada uma com seus serviços, entidades de domínio e componentes de UI. Além dos elementos compartilhados (`shared`), que promovem a reutilização de UI, recursos de busca e layouts comuns.

## Feature Pokémon

A **Feature Pokémon** centraliza tudo que envolve a listagem, busca e visualização de detalhes de Pokémons. Ela garante performance, acessibilidade e experiência fluida por meio de scroll infinito, pré-fetch de dados e gerenciamento eficiente do estado do servidor.

### Estrutura de pastas da feature

Dentro de `src/app/features/pokemon`, a organização segue as cinco áreas principais:

* **Application**: serviços `GetPokemonList` e `GetPokemonDetails`, responsáveis por orquestrar as chamadas à API e converter DTOs em objetos de domínio.
* **Domain**: modelos como `PokemonListItem` e `PokemonDetails` e regras de negócio puras que garantem a consistência dos dados.
* **Presentation**: componentes React (e.g., `PokemonListScreen`, `PokeCard`, `PokemonDetailsModal`).
* **Queries**: definições de configuração para React Query (`pokemonListQueryOptions`, `pokemonDetailsQueryOptions`), auxiliando no cache, pré-fetch e atualização dos dados.
* **Router**: arquivos que definem as rotas da feature (por exemplo, listagem em `/` e busca em `/search/:name`), integrando com TanStack Router para lazy loading e navegação declarativa.

### Acessibilidade

Todos os componentes seguem práticas de acessibilidade: utilizam HTML semântico, labels claros, atributos ARIA apropriados e suporte total à navegação por teclado. O modal de detalhes emprega o focus trap do Radix Dialog e fornece descrições alternativas para as imagens dos Pokémons.

### Gerenciamento de estado do servidor

O React Query gerencia fetch, cache e atualização dos dados de forma centralizada. Com `staleTime` de 5 minutos e `cacheTime` ajustado, evitamos requisições duplicadas. As infinite queries carregam páginas adicionais conforme o usuário alcança o fim da lista.

### Virtualização

<p align="center">
 <img src="https://github.com/user-attachments/assets/a259e5fe-665c-4f18-b256-9172c1019737" />
</p>

A lista de Pokémons é renderizada com TanStack Virtual, exibindo apenas os itens visíveis na viewport para otimizar memória e desempenho. A configuração de overscan antecipa elementos fora de tela, garantindo um scroll suave mesmo em longas listas.
