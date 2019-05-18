import { createConnection } from 'typeorm';
import * as Koa from 'koa';
import * as next from 'next';
import * as Router from 'koa-router';
import article from './server/controller/article';

const port = parseInt(String(process.env.PORT), 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './client' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createConnection().then(() => {
    const server = new Koa();
    const router = new Router();

    server.use(article.routes());

    router.get('/article/:id', async ctx => {
      await app.render(ctx.req, ctx.res, '/article', ctx.params);
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
