import { Release } from './types';

export const releases: Release[] = [
  {
    language: 'português',
    title: 'Meu Chevrolet',
    releaseDate: new Date(2023, 11, 22),
    cover: 'meu-chevrolet.jpg',
    songs: [
      {
        title: 'Meu Chevrolet',
        isAvailable: true,
        releaseDate: new Date(2023, 11, 22),
        file: 'meu-chevy-demo.mp3',
      },
    ],
    type: 'Single',
  },
  {
    language: 'english',
    title: 'Other Seas',
    type: 'EP',
    releaseDate: new Date(2024, 0, 15),
    cover: 'other-seas.jpg',
    songs: [
      {
        title: 'What\'s going on in my head',
        isAvailable: false,
        releaseDate: new Date(2024, 0, 15),
        file: 'whats-going-demo.mp3',
      },
      {
        title: 'Hold it tight',
        isAvailable: false,
        releaseDate: new Date(2024, 1, 15),
        file: 'hold-tight-demo.mp3',
      },
      {
        title: 'Black mustang',
        isAvailable: false,
        releaseDate: new Date(2024, 2, 15),
        file: 'black-mustang-demo.mp3',
      },
      {
        title: 'Other Seas',
        isAvailable: false,
        releaseDate: new Date(2024, 3, 15),
        file: 'other-seas-demo.mp3',
      },
      {
        title: 'Time',
        isAvailable: false,
        releaseDate: new Date(2024, 4, 15),
        file: 'time-demo.mp3',
      },
      {
        title: 'How much better?',
        isAvailable: false,
        releaseDate: new Date(2024, 5, 15),
        file: 'how-much-demo.mp3',
      },
    ],
  },
];
