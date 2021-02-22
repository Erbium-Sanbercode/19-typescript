/* eslint-disable @typescript-eslint/no-explicit-any */
import { SERVICE_BASEURL } from './config';
import { PayloadAction } from '@reduxjs/toolkit';

// setup state
export interface initialStateInterface {
  loading: boolean;
  error?: Error | string | null;
  workers: Worker[];
  tasks: Task[];
}

export interface Task {
  id?: number;
  job: string;
  assignee: string;
  done: boolean;
  attachment: string;
}

export interface Worker {
  id: number;
  name: string;
}

export interface TaskData {
  id: number;
  job: string;
  cancelled: boolean;
  done: boolean;
  attachment: string;
  addedAt: Date;
  assignee: WorkerData;
}

export interface WorkerData {
  id: number;
  name: string;
  age: number;
  bio: string;
  address: string;
  photo: string;
}

export const initialState: initialStateInterface = {
  loading: false,
  error: null,
  workers: [],
  tasks: [],
};

export function loading(state: initialStateInterface): void {
  state.loading = true;
  state.error = null;
}

export function error(
  state: initialStateInterface,
  action: PayloadAction<Error | string | null>
): void {
  state.loading = false;
  state.error = action.payload;
}

export function clearError(state: initialStateInterface): void {
  state.error = null;
}

export function added(
  state: initialStateInterface,
  action: PayloadAction<TaskData>
): initialStateInterface {
  const task = action.payload;
  state.tasks.push({
    id: task.id,
    job: task.job,
    assignee: task.assignee.name,
    attachment: `${SERVICE_BASEURL}/attachment/${task.attachment}`,
    done: false,
  });
  state.loading = false;
  state.error = null;
  return state;
}

export function done(
  state: initialStateInterface,
  action: { payload: number }
): initialStateInterface {
  const idx = state.tasks.findIndex((t) => t.id === action.payload);
  state.tasks[idx].done = true;
  state.loading = false;
  state.error = null;
  return state;
}

export function canceled(
  state: initialStateInterface,
  action: { payload: number }
): initialStateInterface {
  const idx = state.tasks.findIndex((t) => t.id === action.payload);
  state.tasks.splice(idx, 1);
  state.loading = false;
  state.error = null;
  return state;
}

export function tasksLoaded(
  state: initialStateInterface,
  action: PayloadAction<TaskData[]>
): initialStateInterface {
  state.tasks = action.payload
    .filter((t) => !t.cancelled)
    .map((task) => ({
      id: task.id,
      job: task.job,
      assignee: task.assignee.name,
      attachment: `${SERVICE_BASEURL}/attachment/${task.attachment}`,
      done: task.done,
    }));
  state.loading = false;
  state.error = null;
  return state;
}

export function workersLoaded(
  state: initialStateInterface,
  action: PayloadAction<WorkerData[]>
): initialStateInterface {
  state.workers = action.payload.map((worker) => ({
    id: worker.id,
    name: worker.name,
  }));
  state.loading = false;
  state.error = null;
  return state;
}
