export interface SummaryObj {
  total_task: number;
  task_done: number;
  task_cancelled: number;
  total_worker: number;
}

export interface Performance {
  loading: boolean;
  error: string;
  summary: SummaryObj;
}

interface ActionObject {
  type: string;
}

interface ActionObjectError extends ActionObject {
  payload: string;
}

interface ActionSummaryLoaded extends ActionObject {
  payload: SummaryObj;
}

// setup state
export const initialState: Performance = {
  loading: false,
  error: null,
  summary: {
    total_task: 0,
    task_done: 0,
    task_cancelled: 0,
    total_worker: 0,
  },
};

export function loading(state: Performance): Performance {
  state.loading = true;
  state.error = null;
  return state;
}

export function error(
  state: Performance,
  action: ActionObjectError
): Performance {
  state.loading = false;
  state.error = action?.payload;
  return state;
}

export function summaryLoaded(
  state: Performance,
  action: ActionSummaryLoaded
): Performance {
  state.summary = action?.payload;
  state.loading = false;
  state.error = null;
  return state;
}
