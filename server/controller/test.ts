import * as Router from 'koa-router';
import ArticleModal from '../model/article.model';

const a = new Router();

a.get('/article/list/:page', async ctx => {
  const { page } = ctx.params;

  const articleModal = await ArticleModal.getInstance().getArticleList(page);
  ctx.body = articleModal;
});

export default a;
