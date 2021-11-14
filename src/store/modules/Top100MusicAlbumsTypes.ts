import IMusicAlbums from "interfaces/IMusicAlbums";
import IMusicAlbumCategory from "interfaces/IMusicAlbumCategory";

export interface Top100MusicAlbumsReducer {
  categories: Partial<IMusicAlbumCategory>[];
  list: IMusicAlbums | null;
  loading: boolean;
}

const TOP_100_MUSIC_ALBUMS_PREFIX = 'TOP_100_MUSIC_ALBUMS_';

export const TOP_100_MUSIC_ALBUMS_LOADING = `${TOP_100_MUSIC_ALBUMS_PREFIX}LOADING`;

interface ITop100MusicAlbumsLoading {
  type: typeof TOP_100_MUSIC_ALBUMS_LOADING;
  payload: boolean;
}

export const TOP_100_MUSIC_ALBUMS_LIST = `${TOP_100_MUSIC_ALBUMS_PREFIX}LIST`;

interface ITop100MusicAlbumsList {
  type: typeof TOP_100_MUSIC_ALBUMS_LIST;
  payload: IMusicAlbums;
}

export type ITop100MusicAlbumsTypes =
  | ITop100MusicAlbumsLoading
  | ITop100MusicAlbumsList;