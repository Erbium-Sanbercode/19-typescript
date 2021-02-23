/* eslint-disable @typescript-eslint/no-explicit-any */
import './main.css';

import { summary } from './async-action';
import { store$ } from './store';

const workers = <HTMLFormElement>document.getElementById('workers');
const tasks = <HTMLFormElement>document.getElementById('tasks');
const done = <HTMLFormElement>document.getElementById('task-done');
const canceled = <HTMLFormElement>document.getElementById('task-canceled');
const refresh = <HTMLFormElement>document.getElementById('refresh');
const errorTxt = <HTMLFormElement>document.getElementById('error-text');
const loadingTxt = <HTMLFormElement>document.getElementById('loading-text');

// presentation layer
store$.subscribe(() => {
  const state = store$.getState();
  render(state);
});
const state = store$.getState();
render(state);

store$.dispatch<any>(summary);

refresh.onclick = () => {
  store$.dispatch<any>(summary);
};

function render(state): void {
  // render error
  if (state.error) {
    errorTxt.textContent = state.error.toString();
  } else {
    errorTxt.textContent = '';
  }
  if (state.loading) {
    loadingTxt.setAttribute('style', '');
  } else {
    loadingTxt.setAttribute('style', 'display:none;');
  }

  // render list of worker
  workers.innerText = state.summary.total_worker.toString();
  tasks.innerText = state.summary.total_task.toString();
  done.innerText = state.summary.task_done.toString();
  canceled.innerText = state.summary.task_cancelled.toString();
}
