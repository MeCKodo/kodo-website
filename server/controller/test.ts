import * as Koa from 'koa';
import * as Router from 'koa-router';
import ArticleModal from '../model/article.model';

const a = new Router();

a.get('/article/list/:page', async (ctx: Koa.Context) => {
  const { page } = ctx.params;

  const articleModal: ArticleModal = ArticleModal.getInstance();
  const data = await articleModal.getArticleList(page);
  ctx.body = data;
});

export default a;
