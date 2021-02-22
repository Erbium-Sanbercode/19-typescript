import { client } from '../lib/http-client';

import { SERVICE_BASEURL } from './config';

import { WorkerInterface } from './reducer';

export interface WorkerData {
  name: string;
  age: string;
  photo: File;
  bio: string;
  address: string;
}

export function register(data: WorkerData): Promise<WorkerInterface> {
  return client.post<WorkerInterface>(`${SERVICE_BASEURL}/register`, data);
}

export function list(): Promise<WorkerInterface[]> {
  return client.get<WorkerInterface[]>(`${SERVICE_BASEURL}/list`);
}

export function remove(id: number): Promise<WorkerInterface> {
  return client.del<WorkerInterface>(`${SERVICE_BASEURL}/remove?id=${id}`);
}

export function info(id: number): Promise<string> {
  return client.get(`${SERVICE_BASEURL}/info?id=${id}`);
}
