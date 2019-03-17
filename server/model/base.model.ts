import { ObjectType, getMongoRepository, MongoRepository } from 'typeorm';
import container from '../DI';

class BaseModel<T> {
  db: MongoRepository<T>;

  static getInstance() {
    return container.get(this);
  }

  constructor(EntityClass: ObjectType<T>) {
    this.db = getMongoRepository(EntityClass);
  }

  async count() {
    return await this.db.count();
  }
}

export default BaseModel;
