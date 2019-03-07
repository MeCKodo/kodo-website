import * as Koa from 'koa';
import * as next from 'next';
import * as Router from 'koa-router';

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get('/json', async (ctx: Koa.BaseContext) => {
    // await app.render(ctx.req, ctx.res, "/a", ctx.query);
    // ctx.respond = false;
    ctx.body = { name: '123' };
  });

  router.get('/detail', async (ctx: Koa.BaseContext) => {
    await app.render(ctx.req, ctx.res, '/detail', ctx.query);
    ctx.respond = false;
  });
  router.get('/', async (ctx: Koa.BaseContext) => {
    await app.render(ctx.req, ctx.res, '/', ctx.query);
    ctx.respond = false;
  });
  router.get('*', async (ctx: Koa.BaseContext) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx: Koa.BaseContext, next: Function) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
