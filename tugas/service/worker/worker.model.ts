import { EntitySchema } from 'typeorm';

export interface WorkerInterface {
  id?: number;
  name: string;
  age: string;
  bio: string;
  address: string;
  photo: string | unknown;
}
/**
 * worker model
 */
export class Worker {
  public id: number;
  /**
   * @param {number} id id dari pekerja
   * @param {string} name nama pekerja
   * @param {number} age umur pekerja
   * @param {string} bio biografi pekerja
   * @param {string} address alamat pekerja
   * @param {string} photo foto profil pekerja
   */
  constructor(
    id: number,
    public name: string,
    public age: number,
    public bio: string,
    public address: string,
    public photo: string | unknown
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.bio = bio;
    this.address = address;
    this.photo = photo;
  }
}

export const WorkerSchema = new EntitySchema<WorkerInterface>({
  name: 'Worker',
  target: Worker,
  tableName: 'workers',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    name: {
      type: 'varchar',
      length: 255,
    },
    age: {
      type: 'int',
    },
    bio: {
      type: 'text',
    },
    address: {
      type: 'text',
    },
    photo: {
      type: 'varchar',
      length: 255,
    },
  },
});
