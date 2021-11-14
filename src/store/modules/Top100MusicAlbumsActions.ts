import { Dispatch } from "redux";
import { top100MusicAlbumsServiceList } from "../../services/Top100MusicAlbumsService";
import { TOP_100_MUSIC_ALBUMS_LIST, TOP_100_MUSIC_ALBUMS_LOADING } from "./Top100MusicAlbumsTypes";

export const top100MusicAlbumsActionList = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: TOP_100_MUSIC_ALBUMS_LOADING,
      payload: true
    });
    top100MusicAlbumsServiceList(
      response => {
        dispatch({
          type: TOP_100_MUSIC_ALBUMS_LIST,
          payload: response
        });
      },
      undefined,
      () => dispatch({
        type: TOP_100_MUSIC_ALBUMS_LOADING,
        payload: false
      })
    )
  }
}