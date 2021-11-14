import { combineReducers } from 'redux';
import Top100MusicAlbumsReducer from './modules/Top100MusicAlbumsReducer';

export const getReducer = (): any => {
  return combineReducers({
    top100MusicAlbums: Top100MusicAlbumsReducer,
  });
};
