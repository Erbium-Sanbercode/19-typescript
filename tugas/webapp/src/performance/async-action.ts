import { loadingAction, errorAction, summaryLoadedAction } from './store';
import * as perfSvc from './performance.client';
import { Dispatch } from '@reduxjs/toolkit';

export const summary = async (dispatch: Dispatch): Promise<void> => {
  dispatch(loadingAction());
  try {
    const summary = await perfSvc.summary();
    dispatch(summaryLoadedAction(summary));
  } catch (err) {
    dispatch(errorAction('gagal memuat informasi kinerja'));
  }
};
