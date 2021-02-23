import { PayloadAction } from '@reduxjs/toolkit';

export interface SummaryObj {
  total_task: number;
  task_done: number;
  task_cancelled: number;
  total_worker: number;
}

interface State {
  loading: boolean;
  error?: Error | string | null;
  summary: SummaryObj;
}

// setup state
export const initialState: State = {
  loading: false,
  error: null,
  summary: {
    total_task: 0,
    task_done: 0,
    task_cancelled: 0,
    total_worker: 0,
  },
};

export function loading(state: State): State | void {
  state.loading = true;
  state.error = null;
  return state;
}

export function error(
  state: State,
  action: PayloadAction<Error | string | null>
): State | void {
  state.loading = false;
  state.error = action?.payload;
  return state;
}

export function summaryLoaded(
  state: State,
  action: PayloadAction<SummaryObj>
): State | void {
  state.summary = action?.payload;
  state.loading = false;
  state.error = null;
  return state;
}
