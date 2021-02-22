import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';
import {
  initialState,
  error,
  loading,
  registered,
  removed,
  workersLoaded,
  clearError,
  WorkerInterface,
} from './reducer';
import * as thunkMiddleware from 'redux-thunk';

export enum ActionType {
  errorAction = 'error',
  loadingAction = 'loading',
  registeredAction = 'registered',
  removedAction = 'removed',
  workersLoadedAction = 'workersLoaded',
  clearErrorAction = 'clearError',
}

export const errorAction = createAction<string>(ActionType.errorAction);
export const loadingAction = createAction(ActionType.loadingAction);
export const registeredAction = createAction<WorkerInterface, string>(
  ActionType.registeredAction
);
export const removedAction = createAction<number>(ActionType.removedAction);
export const workersLoadedAction = createAction<WorkerInterface[]>(
  ActionType.workersLoadedAction
);
export const clearErrorAction = createAction(ActionType.clearErrorAction);

const reducer = createReducer(initialState, {
  [ActionType.errorAction]: error,
  [ActionType.clearErrorAction]: clearError,
  [ActionType.loadingAction]: loading,
  [ActionType.registeredAction]: registered,
  [ActionType.removedAction]: removed,
  [ActionType.workersLoadedAction]: workersLoaded,
});

export const store$ = configureStore({
  reducer,
  middleware: [thunkMiddleware.default],
});
