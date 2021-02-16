import { SERVICE_BASEURL } from './config';

type initialStateInterface = {
  loading: boolean;
  error: unknown;
  workers: WorkerInterface[];
};

export interface WorkerInterface {
  id?: number;
  name?: string;
  age?: string;
  bio?: string;
  address?: string;
  photo?: string | unknown;
}
// setup state
export const initialState: initialStateInterface = {
  loading: false,
  error: null,
  workers: [],
};

export function loading(state: initialStateInterface): void {
  state.loading = true;
  state.error = null;
}

export function error(
  state: initialStateInterface,
  action: { payload: unknown }
): void {
  state.loading = false;
  state.error = action.payload;
}

export function clearError(state: initialStateInterface): void {
  state.error = null;
}

export function registered(
  state: initialStateInterface,
  action: { payload: WorkerInterface }
): initialStateInterface {
  const worker = action.payload;
  state.workers.push({
    id: worker.id,
    name: worker.name,
    photo: `${SERVICE_BASEURL}/photo/${worker.photo}`,
    bio: worker.bio,
  });
  state.loading = false;
  state.error = null;
  return state;
}

export function removed(
  state: initialStateInterface,
  action?: { payload: number }
): initialStateInterface {
  const idx = state.workers.findIndex((t) => t.id === action.payload);
  state.workers.splice(idx, 1);
  state.loading = false;
  state.error = null;
  return state;
}

export function workersLoaded(
  state: initialStateInterface,
  action: { payload: WorkerInterface[] }
): initialStateInterface {
  state.workers = action.payload.map((worker) => ({
    id: worker.id,
    name: worker.name,
    photo: `${SERVICE_BASEURL}/photo/${worker.photo}`,
    bio: worker.bio,
  }));
  state.loading = false;
  state.error = null;
  return state;
}
