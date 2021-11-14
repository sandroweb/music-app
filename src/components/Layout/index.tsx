import { Main } from "pages";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <Fragment>
      <Main />
      <ToastContainer />
    </Fragment>
  )
}

export default Layout;