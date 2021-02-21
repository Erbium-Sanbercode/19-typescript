import { client } from '../lib/http-client';

import { SERVICE_BASEURL } from './config';
import { SummaryObj } from './reducer';

export function summary(): Promise<SummaryObj> {
  return client.get(`${SERVICE_BASEURL}/summary`);
}
