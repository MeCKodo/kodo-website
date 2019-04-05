import { inject } from '../DI';
import BaseModel from './base.model';
import { ArticleEntity } from '../entity/Article';

@inject([ArticleEntity])
class ArticleModel extends BaseModel<ArticleEntity> {
  constructor() {
    super(ArticleEntity);
  }

  async getArticleList(page: number, size: number) {
    const articles = await this._getArticleList(Number(page), Number(size));
    const total = await this.count();
    return {
      articles,
      total,
    };
  }

  private _getArticleList(page: number, size: number) {
    return this.db.find({
      // select: ['ctime', 'title'],
      skip: (page - 1) * size,
      take: size,
      order: {
        ctime: 'DESC',
      },
    });
  }

  async getArticleDetail(urlAlias: string) {
    return await this.db.findOne({ where: { url_alias: urlAlias } });
  }
}

export default ArticleModel;
