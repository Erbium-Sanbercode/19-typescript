/* eslint-disable @typescript-eslint/no-explicit-any */
//import * as FormData from 'form-data';

export async function client<T>(
  endpoint: string,
  json: boolean,
  { method, body, ...customConf }: RequestInit = {}
): Promise<T> {
  let headers;
  if (json) {
    headers = { 'Content-Type': 'application/json' };
  }

  const config: RequestInit = {
    method,
    ...customConf,
    headers: {
      ...headers,
      ...customConf?.headers,
    },
  };

  if (body) {
    if (json) {
      config.body = JSON.stringify(body);
    } else {
      const formData = new FormData();
      for (const name in body as { [key: string]: any }) {
        formData.append(name, body[name]);
      }
      config.body = formData;
    }
  }

  let data: T;
  try {
    const response = await window.fetch(endpoint, config);
    data = await response.json();
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return data;
  } catch (err) {
    return Promise.reject(err.toString() || err.message);
  }
}

client.get = <T>(endpoint: string, customConf: RequestInit = {}) => {
  return client<T>(endpoint, true, { method: 'GET', ...customConf });
};

client.post = <T>(
  endpoint: string,
  body?: BodyInit | any,
  json = false,
  customConf = {}
) => {
  return client<T>(endpoint, json, { method: 'POST', body, ...customConf });
};

client.put = <T>(
  endpoint: string,
  body?: BodyInit | any,
  json = false,
  customConf: RequestInit = {}
) => {
  return client<T>(endpoint, json, { method: 'PUT', body, ...customConf });
};

client.del = <T>(
  endpoint: string,
  body?: BodyInit | any,
  json = false,
  customConf: RequestInit = {}
) => {
  return client<T>(endpoint, json, { method: 'DELETE', body, ...customConf });
};
