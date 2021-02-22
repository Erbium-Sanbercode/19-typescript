import { Dispatch } from '@reduxjs/toolkit';
import {
  loadingAction,
  errorAction,
  registeredAction,
  removedAction,
  workersLoadedAction,
} from './store';
import * as workerSvc from './worker.client';
import { WorkerData } from './worker.client';

export const register = (data: WorkerData) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch(loadingAction());
  try {
    const worker = await workerSvc.register(data);
    dispatch(registeredAction(worker));
  } catch (err) {
    dispatch(errorAction(`gagal mendaftarkan ${data.name}`));
  }
};

export const remove = (id: number) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch(loadingAction());
  try {
    await workerSvc.remove(id);
    dispatch(removedAction(id));
  } catch (err) {
    dispatch(errorAction('gagal menghapus pekerja'));
  }
};

export const getList = async (dispatch: Dispatch): Promise<void> => {
  dispatch(loadingAction());
  try {
    const workers = await workerSvc.list();
    dispatch(workersLoadedAction(workers));
  } catch (err) {
    dispatch(errorAction('gagal memuat daftar pekerja'));
  }
};
