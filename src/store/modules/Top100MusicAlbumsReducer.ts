import IMusicAlbumCategory from 'interfaces/IMusicAlbumCategory';
import IMusicAlbums from 'interfaces/IMusicAlbums';
import { ITop100MusicAlbumsTypes, Top100MusicAlbumsReducer, TOP_100_MUSIC_ALBUMS_LIST, TOP_100_MUSIC_ALBUMS_LOADING } from './Top100MusicAlbumsTypes';

const INITIAL_STATE: Top100MusicAlbumsReducer = {
  categories: [],
  list: null,
  loading: false,
}

const getCategories = (musicAlbums: IMusicAlbums): Partial<IMusicAlbumCategory>[] => {
  const categories: Partial<IMusicAlbumCategory>[] = [];
  musicAlbums.feed.entry.forEach(album => {
    if (!categories.find(it => it.attributes?.['im:id'] === album.category.attributes?.['im:id'])) {
      categories.push(album.category);
    }
  });
  return [ ...categories ];
}

const Reducer = (state: Top100MusicAlbumsReducer = INITIAL_STATE, action: ITop100MusicAlbumsTypes) => {
  console.log(action);
  switch (action.type) {
  case TOP_100_MUSIC_ALBUMS_LOADING:
    return { ...state, loading: action.payload };
  case TOP_100_MUSIC_ALBUMS_LIST:
    return { ...state, list: action.payload, categories: getCategories(action.payload as IMusicAlbums) };
  default:
    return state;
  }
}

export default Reducer;