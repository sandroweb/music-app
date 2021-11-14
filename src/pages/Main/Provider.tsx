import { ReactNode, useCallback, useEffect } from "react";
import { MainContext } from "./types";
import Context from './context';
import { useDispatch } from "react-redux";
import { top100MusicAlbumsActionList } from 'store/modules/Top100MusicAlbumsActions';

interface ProviderProps {
  children?: ReactNode;
}

const Provider = (props: ProviderProps) => {
  const dispatch = useDispatch();

  const load = useCallback(() => {
    dispatch(top100MusicAlbumsActionList());
  }, [dispatch])

  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, [])

  return (
    <Context.Provider value={{
      reload: load
    }}>
      {props.children}
    </Context.Provider>
  )
}

export default Provider;

interface ConsumerProps {
  children: (consumerProps: MainContext) => ReactNode
}

export const Consumer = (props: ConsumerProps) => {
  return (
    <Context.Consumer>
      {props.children}
    </Context.Consumer>
  )
}