import { createConnection } from 'typeorm';
import * as Koa from 'koa';
// import * as logger from 'koa-logger';
import * as cors from '@koa/cors';
import a from './controller/test';

createConnection()
  .then(() => {
    const app = new Koa();
    app.use(cors());
    // app.use(logger());
    app.use(a.routes());

    app.listen(3000);
    console.log('http://localhost:3000');
  })
  .catch(error => console.log('TypeORM connection error: ', error));
