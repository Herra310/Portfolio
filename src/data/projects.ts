export interface Project {
  name: string;
  img: string;
  description: string;
  repo: string;
  deploy?: string;
}

export const projects: Project[] = [
  {
    name: 'PokeApp',
    img: 'proyectos/pokemon.gif',
    description:
      'Una página hecha en React que te permite buscar y filtrar diferentes pokémon usando la PokeAPI. Sigue en desarrollo, pero puedes revisar cómo va.',
    repo: 'https://github.com/Herra310/react-pokeapi-page',
    deploy: 'https://herra310.github.io/react-pokeapi-page/',
  },
  {
    name: 'Paralax component',
    img: 'proyectos/Paralax.gif',
    description:
      'Un componente de muestra creado en Vue, sobre unos tenis Nike con un bonito efecto de paralaje cuando se mueve el ratón.',
    repo: 'https://github.com/Herra310/Vue-card',
  },
  {
    name: 'Weather app',
    img: 'proyectos/weather.gif',
    description:
      'Aplicación en React que te permite consultar a través de una API el clima y la temperatura de una ciudad, además de mostrar el mapa de Google Maps.',
    repo: 'https://github.com/Herra310/weather-widget',
  },
  {
    name: 'Tic Tac Toe',
    img: 'proyectos/Tictac.gif',
    description: 'El clásico y sencillo juego del gato creado en JavaScript, CSS y HTML.',
    repo: 'https://github.com/Herra310/tictactoe',
  },
  {
    name: 'Perfil animado',
    img: 'proyectos/profile.gif',
    description: 'Un componente en React con una tarjeta de un perfil animado con CSS.',
    repo: 'https://github.com/Herra310/profile-card',
  },
];
