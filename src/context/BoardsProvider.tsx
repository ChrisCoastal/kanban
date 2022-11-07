import React, { FC, createContext, ReactElement, useReducer } from 'react';
import { BoardsType } from 'src/@types';
import reducer from './reducer';

type BoardsProviderProps = {
  children?: ReactElement;
};

const initialContext = {};

const BoardsCtx = createContext(initialContext);
const initialState = {} as BoardsType;

const BoardsProvider: FC<BoardsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchBoardData = async () => {
    try {
      const res = await fetch('src/boards/data.json');
      const data: BoardsType = await res.json();
      console.log(data);

      // setBoardData(() => data);
      return;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BoardsCtx.Provider value={{ state, dispatch, fetchBoardData }}>
      {children}
    </BoardsCtx.Provider>
  );
};

export { BoardsProvider, BoardsCtx };
