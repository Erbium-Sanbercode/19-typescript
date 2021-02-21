import * as bus from '../lib/bus';
import {
  increaseTotalTask,
  increaseDoneTask,
  increaseCancelledTask,
  increaseTotalWorker,
  decreaseTotalWorker,
} from './performance';

let increaseTotalTaskSub;
let increaseDoneTaskSub;
let increaseCancelledTaskSub;
let increaseTotalWorkerSub;
let decreaseTotalWorkerSub;

export function run(): void {
  increaseTotalTaskSub = bus.subscribe(
    'task.added',
    increaseTotalTask.toString()
  );
  increaseDoneTaskSub = bus.subscribe('task.done', increaseDoneTask.toString());
  increaseCancelledTaskSub = bus.subscribe(
    'task.cancelled',
    increaseCancelledTask.toString()
  );
  increaseTotalWorkerSub = bus.subscribe(
    'worker.registered',
    increaseTotalWorker.toString()
  );
  decreaseTotalWorkerSub = bus.subscribe(
    'worker.removed',
    decreaseTotalWorker.toString()
  );
}

export function stop(): void {
  if (increaseTotalTaskSub) {
    bus.unsubscribe(increaseTotalTaskSub);
  }
  if (increaseDoneTaskSub) {
    bus.unsubscribe(increaseDoneTaskSub);
  }
  if (increaseCancelledTaskSub) {
    bus.unsubscribe(increaseCancelledTaskSub);
  }
  if (increaseTotalWorkerSub) {
    bus.unsubscribe(increaseTotalWorkerSub);
  }
  if (decreaseTotalWorkerSub) {
    bus.unsubscribe(decreaseTotalWorkerSub);
  }
}
