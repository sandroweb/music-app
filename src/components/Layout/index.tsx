import { makeStyles } from "@mui/styles";
import { TopBar } from "components";
import { Main } from "pages";
import { ToastContainer } from "react-toastify";
import Provider, { Consumer } from './Provider';

const useStyles = makeStyles({
  '@global': {
    '.Layout-root': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
    },
    '.Layout-content': {
      flex: 1,
      width: '100%',
    },
  }
})

const Layout = () => {
  useStyles();

  return (
    <Provider>
      <Consumer>
        {
          consumerProps => (
            <div
              className="Layout-root"
            >
              <TopBar />
              <div
                className="Layout-content"
              >
                <Main />
              </div>
              <ToastContainer />
            </div>
          )
        }
      </Consumer>
    </Provider>
  )
}

export default Layout;