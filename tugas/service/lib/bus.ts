import * as nats from 'nats';

let client;

export function connect(
  url?: string,
  config?: nats.ClientOpts
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    client = nats.connect(url, config);
    client.on('connect', () => {
      resolve('connected to bus');
    });
    client.on('error', (err) => {
      reject(err);
    });
  });
}

export function publish(subject: string, data = {}): void {
  client.publish(subject, JSON.stringify(data));
}

export function subscribe(subject: string, callback: string): string {
  return client.subscribe(subject, callback);
}

export function unsubscribe(sid: number): string {
  return client.unsubscribe(sid);
}

export function close(): void {
  if (!client) {
    return;
  }
  client.close();
}
