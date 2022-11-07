// data
export type BoardsType = BoardData[];

export type BoardData = {
  name: string;
  columns: ColumnData[];
};

export type ColumnData = {
  name: string;
  tasks: TaskType[];
};

export type TaskType = {
  title: string;
  description: string;
  status: string;
  subtasks: SubtaskType[];
};

export type SubtaskType = {
  title: string;
  isCompleted: boolean;
};

// reducer
export type BoardsCtxType = {
  state: BoardsType;
  dispatch: React.Dispatch<BoardsReducerActions>;
};

export type BoardsReducerActions = {
  type: BoardsActionsType;
  payload: any;
};

export enum BoardsActionsType {
  ADD_BOARD,
}
