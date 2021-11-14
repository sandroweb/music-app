import Axios, { AxiosError } from 'axios';
import IMusicAlbums from 'interfaces/IMusicAlbums';
import { toast } from 'react-toastify';

export const top100MusicAlbumsServiceList = (
  onSuccess: (response: IMusicAlbums) => void,
  onFail?: (error: AxiosError) => void,
  onFinally?: () => void,
) => {
  
  Axios.get<IMusicAlbums>(
    `https://itunes.apple.com/us/rss/topalbums/limit=100/json`,
    // `/data/music-albums.json`,
  ).then(
    response => onSuccess(response.data),
    error => {
      toast((error as AxiosError).response?.statusText);
      if (!!onFail) onFail(error as AxiosError);
    }
  ).finally(() => {
    onFinally && onFinally();
  })
};
