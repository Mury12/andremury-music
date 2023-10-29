export interface Song {
  title: string;
  lyrics?: string;
  isAvailable: boolean;
  releaseDate: Date;
  file?: string;
}

export interface Release {
  type: 'EP' | 'LP' | 'Single';
  cover: string;
  title: string;
  language: string;
  songs: Song[];
  spotifyUrl?: string;
  deezerUrl?: string;
  youtubeUrl?: string;
  releaseDate: Date;
}
