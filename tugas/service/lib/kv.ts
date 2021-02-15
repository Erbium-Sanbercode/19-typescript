import * as redis from 'redis';
import { promisify } from 'util';

let client;

export function connect(options?: []): Promise<string> {
  return new Promise((resolve, reject) => {
    client = redis.createClient(options);
    client.on('connect', () => {
      resolve('connected to redis');
    });
    client.on('error', (err) => {
      reject(err);
    });
  });
}

export function save(db: string, data: string): number {
  const setAsync = promisify(client.set).bind(client);
  return setAsync(db, data);
}

export async function read(db: string): Promise<unknown> {
  const getAsync = promisify(client.get).bind(client);
  const val = await getAsync(db);
  return JSON.parse(val);
}

export function drop(db: string): Promise<unknown> {
  const delAsync = promisify(client.del).bind(client);
  return delAsync(db);
}

export function close(): void {
  if (!client) {
    return;
  }
  if (client.connected) {
    client.end(true);
  }
}
