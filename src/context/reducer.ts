import {
  BoardsActionsType,
  BoardsReducerActions,
  BoardsType,
} from 'src/@types';

const reducer = (state: BoardsType, action: BoardsReducerActions) => {
  const { type, payload } = action;

  switch (type) {
    case BoardsActionsType.ADD_BOARD: {
      return { ...state, payload };
    }
    default:
      return state;
  }
};

export default reducer;
