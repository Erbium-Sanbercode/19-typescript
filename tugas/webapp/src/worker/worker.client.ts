import { client } from '../lib/http-client';

import { SERVICE_BASEURL } from './config';

export interface WorkerInterface {
  id?: number;
  name: string;
  age: string;
  bio: string;
  address: string;
  photo: string | unknown;
}

export function register(data: WorkerInterface): Promise<string> {
  return client.post(`${SERVICE_BASEURL}/register`, data);
}

export function list(): Promise<string> {
  return client.get(`${SERVICE_BASEURL}/list`);
}

export function remove(id: string): Promise<string> {
  return client.del(`${SERVICE_BASEURL}/remove?id=${id}`);
}

export function info(id: WorkerInterface[]): Promise<string> {
  return client.get(`${SERVICE_BASEURL}/info?id=${id}`);
}

// module.exports = {
//   register,
//   list,
//   remove,
//   info,
// };
