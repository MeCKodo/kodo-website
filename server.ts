import { createConnection } from 'typeorm';
import * as Koa from 'koa';
import * as next from 'next';
import * as Router from 'koa-router';
import a from './server/controller/test';

const port = parseInt(String(process.env.PORT), 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './client' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createConnection().then(() => {
    const server = new Koa();
    const router = new Router();

    server.use(a.routes());

    router.get('/json', async ctx => {
      // await app.render(ctx.req, ctx.res, "/a", ctx.query);
      // ctx.respond = false;
      ctx.body = { name: '123' };
    });

    router.get('/detail', async ctx => {
      await app.render(ctx.req, ctx.res, '/detail', ctx.query);
      ctx.respond = false;
    });
    router.get('/', async ctx => {
      await app.render(ctx.req, ctx.res, '/', ctx.query);
      ctx.respond = false;
    });
    router.get('*', async ctx => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    });

    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200;
      await next();
    });

    server.use(router.routes());
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
});
