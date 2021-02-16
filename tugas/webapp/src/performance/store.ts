import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';
import { initialState, error, loading, summaryLoaded } from './reducer';
import thunkMiddleware from 'redux-thunk';
import { SummaryObj } from './reducer';

enum ActionType {
  ERROR = 'error',
  LOADING = 'loading',
  SUMMARYLOADED = 'summaryLoaded',
}

export const errorAction = createAction<string>(ActionType.ERROR);
export const loadingAction = createAction(ActionType.LOADING);
export const summaryLoadedAction = createAction<SummaryObj>(
  ActionType.SUMMARYLOADED
);

const reducer = createReducer(initialState, {
  [ActionType.ERROR]: error,
  [ActionType.LOADING]: loading,
  [ActionType.SUMMARYLOADED]: summaryLoaded,
});

export const store$ = configureStore({
  reducer,
  middleware: [thunkMiddleware],
});
