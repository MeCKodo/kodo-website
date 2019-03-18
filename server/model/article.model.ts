import { ObjectID } from 'typeorm';
import { inject } from '../DI';
import BaseModel from './base.model';
import { ArticleEntity } from '../entity/Article';

@inject([ArticleEntity])
class ArticleModel extends BaseModel<ArticleEntity> {
  constructor() {
    super(ArticleEntity);
  }

  async getArticleList(page: number) {
    const articles = await this._getArticleList(page);
    const total = await this.count();
    return {
      articles,
      total,
    };
  }

  private _getArticleList(page: number) {
    return this.db.find({
      select: ['ctime', 'title'],
      skip: (page - 1) * 5,
      take: 5,
      order: {
        ctime: 'DESC',
      },
    });
  }

  async getArticleDetail(id: ObjectID) {
    return await this.db.find({ id });
  }
}

export default ArticleModel;
