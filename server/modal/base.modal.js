class BaseModal {
  constructor(ctx, name) {
    this.ctx = ctx;
    this.db = ctx.db;
    this.collection = this.db.collection(name);
  }

  async count() {
    return await this.collection.find().count();
  }
}

export default BaseModal;
