import { StyleSizes } from "enuns";
import { ReactNode, useCallback, useEffect, useState } from "react";
import Context from './context';
import { LayoutContext } from "./types";

const desktopMediaQuery = `(min-width: ${StyleSizes.MinDesktopSize}px)`;

interface ProviderProps {
  children?: ReactNode;
}

const Provider = (props: ProviderProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(!window.matchMedia(desktopMediaQuery).matches);
  const [topBarRightWidget, setTopBarRightWidget] = useState<ReactNode>(null);

  const onMatchMediaChanged = useCallback(() => {
    setIsMobile(!window.matchMedia(desktopMediaQuery).matches);
  }, [setIsMobile])

  useEffect(() => {
    window.matchMedia(desktopMediaQuery).addEventListener('change', onMatchMediaChanged);
    return () => window.matchMedia(desktopMediaQuery).removeEventListener('change', onMatchMediaChanged);
  }, [onMatchMediaChanged])

  return (
    <Context.Provider value={{
      isMobile,
      topBarRightWidget,
      setTopBarRightWidget,
    }}>
      {props.children}
    </Context.Provider>
  )
}

export default Provider;

interface ConsumerProps {
  children: (consumerProps: LayoutContext) => ReactNode
}

export const Consumer = (props: ConsumerProps) => {
  return (
    <Context.Consumer>
      {props.children}
    </Context.Consumer>
  )
}