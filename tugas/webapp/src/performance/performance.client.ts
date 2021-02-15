import { httpClient } from '../lib/http-client';

import { SERVICE_BASEURL } from './config';

export function summary() {
  return httpClient.get(`${SERVICE_BASEURL}/summary`);
}
