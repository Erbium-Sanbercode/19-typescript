import {
  loadingAction,
  errorAction,
  registeredAction,
  removedAction,
  workersLoadedAction,
  store$,
} from './store';
import * as workerSvc from './worker.client';

export interface WorkerInterface {
  id?: number;
  name: string;
  age: string;
  bio: string;
  address: string;
  photo: string | unknown;
}

export const register = (data: WorkerInterface) => async (
  dispatch: typeof store$.dispatch
): Promise<void> => {
  dispatch(loadingAction());
  try {
    const worker = await workerSvc.register(data);
    dispatch(registeredAction(worker));
  } catch (err) {
    dispatch(errorAction(`gagal mendaftarkan ${data.name}`));
  }
};

export const remove = (id: string) => async (
  dispatch: typeof store$.dispatch
): Promise<void> => {
  dispatch(loadingAction());
  try {
    await workerSvc.remove(id);
    dispatch(removedAction(id));
  } catch (err) {
    dispatch(errorAction('gagal menghapus pekerja'));
  }
};

export const getList = async (
  dispatch: typeof store$.dispatch
): Promise<void> => {
  dispatch(loadingAction());
  try {
    const workers = await workerSvc.list();
    dispatch(workersLoadedAction(workers));
  } catch (err) {
    dispatch(errorAction('gagal memuat daftar pekerja'));
  }
};
