import { httpClient } from '../lib/http-client';

import { SERVICE_BASEURL } from './config';
import { SummaryObject } from './reducer';

export function summary(): Promise<SummaryObject> {
  return httpClient.get(`${SERVICE_BASEURL}/summary`);
}