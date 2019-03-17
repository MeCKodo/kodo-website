import BaseModal from './base.modal';

class ArticleModal extends BaseModal {
  constructor(ctx) {
    super(ctx, 'think_article');
  }

  async getArticleList(page = 1) {
    const articles = await this._getArticleList(page);
    const total = await this.count();
    return {
      articles,
      total,
    };
  }

  _getArticleList(page) {
    return this.collection
      .find({})
      .project({ ctime: 1, title: 1 })
      .skip((page - 1) * 5)
      .limit(5)
      .sort(['ctime', -1])
      .toArray();
  }

  async getArticleDetail(id) {
    return await this.collection.find({ id });
  }
}

export default ArticleModal;
