import { loadingAction, errorAction, summaryLoadedAction } from './store';

import { summary as summaryClient } from './performance.client';

export const summary = async (dispatch) => {
  dispatch(loadingAction());
  try {
    const summary = await summaryClient();
    dispatch(summaryLoadedAction(summary));
  } catch (err) {
    dispatch(errorAction('gagal memuat informasi kinerja'));
  }
};
