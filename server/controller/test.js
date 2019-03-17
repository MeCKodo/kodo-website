import Router from 'koa-router';
import ArticleModal from '../modal/article.modal';

const a = new Router();

a.get('/articles', async ctx => {
  const { page } = ctx.query;
  const articleModal = new ArticleModal(ctx);
  const articles = await articleModal.getArticleList(page);
  ctx.body = articles;
});

a.get('/', async (ctx, next) => {
  const { page } = ctx.query;
  const articleModal = new ArticleModal(ctx);
  await articleModal.getArticleList(page);
  await articleModal.getArticleList(2);
  await articleModal.getArticleList(3);
  ctx.body = '123';
});

a.get('/test', async (ctx) => {
  ctx.body='123123'
})

export default a;
