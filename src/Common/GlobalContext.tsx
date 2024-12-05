import { createContext } from "react";
import { GlobalContextModel } from "../Models/GlobalContextModel";

export const GlobalContext = createContext<GlobalContextModel>({
  setLaptopState(open) {},
});
