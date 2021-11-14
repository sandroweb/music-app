import { useSelector } from "react-redux";
import IReducer from 'interfaces/IReducer';
import Provider, { Consumer } from "./Provider";
import { Fragment } from 'react';

const Main = () => {
  const top100MusicAlbums = useSelector((state: IReducer) => state.top100MusicAlbums);
  return (
      <Provider>
        <Consumer>
          {
            consumerProps => (
              <Fragment>
                { top100MusicAlbums.loading && (
                  <p>
                    Carregando ...
                  </p>
                ) }
                <p>{`Loaded ${top100MusicAlbums.categories.length} categories.`}</p>
                <p>{`Loaded ${top100MusicAlbums.list?.feed.entry.length || 0} albums.`}</p>
              </Fragment>
            )
          }
        </Consumer>
      </Provider>
  )
}

export default Main;