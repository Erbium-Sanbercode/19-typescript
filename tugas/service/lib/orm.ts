/** @module orm */
import {
  Connection,
  ConnectionOptions,
  createConnection,
  EntitySchema,
} from 'typeorm';

/**
 * @param {EntitySchema[]} entities model entities schemas
 * @param {*} config additional [`typeorm`](https://typeorm.io) connection config
 *
 * @example
 * // initiate database connection
 * async function init() {
 *  await connect([MySchema], {
 *    type: 'postgres',
 *    host: 'localhost',
 *    port: 5432,
 *    username: 'postgres',
 *    password: 'postgres',
 *    database: 'database_name',
 *  });
 * }
 */
export function connect(
  entities: EntitySchema[],
  config?: ConnectionOptions
): Promise<Connection> {
  return createConnection({
    ...config,
    synchronize: true,
    entities,
  });
}
