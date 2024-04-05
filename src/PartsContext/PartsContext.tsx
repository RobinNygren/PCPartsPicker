import { createContext, useReducer, useContext, ReactNode } from "react";
import {
  partsReducer,
  inititalState,
  PartsAction,
} from "../PartsReducer/PartsReducer";
import { PartsState } from "../PartTypes";

type PartsContextType = {
  state: PartsState;
  dispatch: React.Dispatch<PartsAction>;
};

const PartsContext = createContext<PartsContextType | undefined>(undefined);

export const PartsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(partsReducer, inititalState);

  return (
    <PartsContext.Provider value={{ state, dispatch }}>
      {children}
    </PartsContext.Provider>
  );
};

export const useParts = () => {
  const context = useContext(PartsContext);
  if (!context) {
    throw new Error("useParts must be used within a PartsProvider");
  }
  return context;
};
