import { createContext } from "react";
import { LayoutContext } from './types';

export default createContext<LayoutContext>({
  isMobile: false,
  topBarRightWidget: null,
  setTopBarRightWidget: () => {},
})