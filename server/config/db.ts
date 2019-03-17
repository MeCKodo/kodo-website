import mongo from 'koa-mongo';

const DB_CONFIG = {
  host: 'localhost',
  port: 27017,
  user: 'kodo',
  pass: '123123',
  db: 'test',
  max: 10,
  acquireTimeoutMillis: 100,
  min: 1,
};

export default app => {
  app.use(mongo(DB_CONFIG));
};
