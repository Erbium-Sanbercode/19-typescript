import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';
import {
  initialState,
  error,
  loading,
  added,
  canceled,
  done,
  tasksLoaded,
  workersLoaded,
  clearError,
  TaskData,
  WorkerData,
} from './reducer';
import * as thunkMiddleware from 'redux-thunk';

export enum ActionType {
  errorAction = 'error',
  loadingAction = 'loading',
  addedAction = 'added',
  doneAction = 'done',
  canceledAction = 'canceled',
  tasksLoadedAction = 'tasksLoaded',
  workersLoadedAction = 'workersLoaded',
  clearErrorAction = 'clearError',
}

export const errorAction = createAction<Error | string | null>(
  ActionType.errorAction
);
export const loadingAction = createAction(ActionType.loadingAction);
export const addedAction = createAction<TaskData>(ActionType.addedAction);
export const doneAction = createAction<number>(ActionType.doneAction);
export const canceledAction = createAction<number>(ActionType.canceledAction);
export const tasksLoadedAction = createAction<TaskData[]>(
  ActionType.tasksLoadedAction
);
export const workersLoadedAction = createAction<WorkerData[]>(
  ActionType.workersLoadedAction
);
export const clearErrorAction = createAction(ActionType.errorAction);

export const reducer = createReducer(initialState, {
  [ActionType.errorAction]: error,
  [ActionType.clearErrorAction]: clearError,
  [ActionType.loadingAction]: loading,
  [ActionType.doneAction]: done,
  [ActionType.addedAction]: added,
  [ActionType.canceledAction]: canceled,
  [ActionType.workersLoadedAction]: workersLoaded,
  [ActionType.tasksLoadedAction]: tasksLoaded,
});

export const store$ = configureStore({
  reducer,
  middleware: [thunkMiddleware.default],
});
