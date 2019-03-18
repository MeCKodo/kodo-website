import * as Koa from 'koa';
import * as Router from 'koa-router';
import ArticleModal from '../model/article.model';

const a = new Router();

a.get('/article/list', async (ctx: Koa.Context) => {
  const { page, size } = ctx.query;

  try {
    const articleModal: ArticleModal = ArticleModal.getInstance();
    const data = await articleModal.getArticleList(page, size);
    ctx.body = data;
  } catch (e) {
    console.error(e, '----获取文章列表出错');
  }
});

export default a;
