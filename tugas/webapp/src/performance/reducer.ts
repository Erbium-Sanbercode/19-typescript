export interface Performance {
  loading: boolean;
  error: string;
  summary: {
    total_task: number,
    task_done: number,
    task_cancelled: number,
    total_worker: number,
  };
}

interface ActionObject {
  type: string;
}

interface ActionObjectError extends ActionObject {
  payload: string;
}

interface ActionSummaryLoaded extends ActionObject {
  payload: {
    total_task: number,
    task_done: number,
    task_cancelled: number,
    total_worker: number,
  };
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

export function loading(state: Performance) {
  state.loading = true;
  state.error = null;
}

export function error(state: Performance, action: ActionObjectError) {
  state.loading = false;
  state.error = action?.payload;
}

export function summaryLoaded(state: Performance, action: ActionSummaryLoaded): Performance {
  state.summary = action?.payload;
  state.loading = false;
  state.error = null;
  return state; 
}
