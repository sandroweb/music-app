import { createContext } from "react";
import { MainContext } from './types';

export default createContext<MainContext>({
  reload: () => {},
});