import { ReducerAction } from 'react';
import { BoardsActions } from 'src/@types';

const reducer = (state: any, action: ReducerAction<>) => {
  const { type, payload } = action;

  switch (type) {
    case BoardsActions.ADD_BOARD: {
      return { ...state, payload };
    }
  }
};

export default reducer;
