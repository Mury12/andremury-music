export const useCounter = () => useState<number>('counter', () => 0);
export const useLayout = () =>
  useState<'default' | 'custom'>('layout', () => 'default');

export const usePlayer = () =>
  useState<HTMLAudioElement | null>('player', () => null);

export const useIsPlaying = () => useState<string>('isPlaying', () => '');

export const useVolume = () => useState<number>('volume', () => 0.5);
