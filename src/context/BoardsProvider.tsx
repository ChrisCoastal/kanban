import React, { FC, createContext, ReactElement, useReducer } from 'react';
import reducer from './reducer';

type BoardsProviderProps = {
  children?: ReactElement;
};

const initialContext = {};

const BoardsCtx = createContext(initialContext);
const initialState = {};

const BoardsProvider: FC<BoardsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BoardsCtx.Provider value={{ state, dispatch }}>
      {children}
    </BoardsCtx.Provider>
  );
};

export { BoardsProvider, BoardsCtx };
