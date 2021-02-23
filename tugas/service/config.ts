import rc from 'rc';

/**
 * configuration
 */
export interface Config {
  postgres: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
  minio: {
    endPoint: string;
    port: number;
    useSSL: boolean;
    accessKey: string;
    secretKey: string;
  };
  nats: {
    url: string;
  };
  redis: {
    host: string;
    port: number;
  };
  worker: { server: ServerConfig };
  task: { server: ServerConfig; workerBaseUrl: string };
  performance: { server: ServerConfig };
}

/**
 * server config
 */
export interface ServerConfig {
  port: number;
}

/**
 * default configuration
 */
const defaultConfig: Config = {
  postgres: {
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'passpostgres1997',
    database: 'sanbercode2',
  },
  minio: {
    endPoint: 'localhost',
    port: 1111,
    useSSL: false,
    accessKey: 'minio',
    secretKey: '12345678',
  },
  nats: {
    url: 'nats://localhost:4222',
  },
  redis: {
    host: 'localhost',
    port: 6379,
  },
  worker: {
    server: {
      port: 7001,
    },
  },
  task: {
    server: {
      port: 7002,
    },
    workerBaseUrl: 'http://localhost:7001',
  },
  performance: {
    server: {
      port: 7003,
    },
  },
};

export const config: Config = rc('tm', defaultConfig) as Config;
