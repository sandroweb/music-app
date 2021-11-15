import { makeStyles } from "@mui/styles";
import { Grid, MusicAlbum, Typography } from "components";
import { Color } from "enuns";
import IReducer from 'interfaces/IReducer';
import { FaSyncAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import Provider, { Consumer } from "./Provider";

const useStyles = makeStyles({
  '@global': {
    '.Main-root': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'stretch',
    },
    '.Main-preloader': {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
})

const Main = () => {
  useStyles();
  const top100MusicAlbums = useSelector((state: IReducer) => state.top100MusicAlbums);

  return (
      <Provider>
        <Consumer>
          {
            consumerProps => (
              <Grid container>
                {
                  consumerProps.firstLoading && top100MusicAlbums.loading && (
                    <Grid>
                      <Typography type="button" color={Color.Secondary} className="Main-preloader">
                        <FaSyncAlt className="animation-rotate" />
                        Carregando
                      </Typography>
                    </Grid>
                  )
                }
                {
                  !consumerProps.firstLoading && (
                    <Grid>
                      <button
                        onClick={
                          () => consumerProps.reload()
                        }
                        disabled={top100MusicAlbums.loading}
                      >
                        Atualizar
                      </button>
                    </Grid>
                  )
                }
                {
                  consumerProps.albums.map((it, index) => (
                    <Grid xs={6} sm={4} md={3} key={index}>
                      <MusicAlbum album={it} />
                    </Grid>
                  ))
                }
              </Grid>
            )
          }
        </Consumer>
      </Provider>
  )
}

export default Main;