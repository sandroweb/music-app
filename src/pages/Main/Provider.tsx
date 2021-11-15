import { SearchInput } from "components";
import LayoutContext from 'components/Layout/context';
import IMusicAlbum from "interfaces/IMusicAlbum";
import IReducer from "interfaces/IReducer";
import { ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { top100MusicAlbumsActionList } from 'store/modules/Top100MusicAlbumsActions';
import Context from './context';
import { MainContext } from "./types";

interface ProviderProps {
  children?: ReactNode;
}

const Provider = (props: ProviderProps) => {
  const layoutContext = useContext(LayoutContext);
  const dispatch = useDispatch();
  const top100MusicAlbums = useSelector((state: IReducer) => state.top100MusicAlbums)
  const [filter, setFilter] = useState<string>('');

  const load = useCallback(() => {
    dispatch(top100MusicAlbumsActionList());
  }, [dispatch])

  const albums = useMemo<IMusicAlbum[]>(() => {
    return !!top100MusicAlbums ? top100MusicAlbums.list?.feed.entry || [] : [];
  }, [top100MusicAlbums])

  const filteredAlbums = useMemo<IMusicAlbum[]>(() => {
    return albums.filter(
      album => {
        if (album["im:artist"].label.toLowerCase().indexOf(filter) > -1) return true
        if (album["im:name"].label.toLowerCase().indexOf(filter) > -1) return true
        if (album.title.label.toLowerCase().indexOf(filter) > -1) return true
        if ((album.category.attributes?.label || '').toLowerCase().indexOf(filter) > -1) return true
        return false;
      }
    )
  }, [albums, filter])

  const topBarWidget = useMemo((): ReactNode => {
    return (
      <SearchInput onSearch={setFilter} disabled={top100MusicAlbums.loading} />
    )
  }, [setFilter, top100MusicAlbums])

  useEffect(() => {
    layoutContext.setTopBarRightWidget(topBarWidget);
    return () => {
      layoutContext.setTopBarRightWidget(null);
    }
  }, [layoutContext, topBarWidget])

  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, [])

  return (
    <Context.Provider value={{
      reload: load,
      albums: filteredAlbums,
      firstLoading: albums.length === 0,
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