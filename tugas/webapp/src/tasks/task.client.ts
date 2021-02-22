import { client } from '../lib/http-client';

import { SERVICE_BASEURL } from './config';

import { TaskData } from './reducer';

export interface NewTaskData {
  attachment: File;
  job: string;
  assignee_id: number;
}

export function add(data: NewTaskData): Promise<TaskData> {
  return client.post<TaskData>(`${SERVICE_BASEURL}/add`, data);
}

export function list(): Promise<TaskData[]> {
  return client.get<TaskData[]>(`${SERVICE_BASEURL}/list`);
}

export function cancel(id: number): Promise<TaskData> {
  return client.put<TaskData>(`${SERVICE_BASEURL}/cancel?id=${id}`);
}

export function done(id: number): Promise<TaskData> {
  return client.put<TaskData>(`${SERVICE_BASEURL}/done?id=${id}`);
}
