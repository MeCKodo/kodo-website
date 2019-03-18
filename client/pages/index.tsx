// import { NextContext } from "next";
import { Component } from 'react';
import axios from 'axios';
import { Article, ArticleWrapper } from '../components/Article';
import Pagination from '../components/Pagination';

type Props = {
  articles: any;
  total: number;
};

export default class extends Component<Props> {
  static async getInitialProps() {
    const res = await axios.get<Props>('http://localhost:3000/article/list/1');
    const { articles, total } = res.data;

    return {
      articles,
      total,
    };
  }

  render() {
    const { articles, total } = this.props;
    console.log(articles, total, '---');
    return (
      <>
        <ArticleWrapper>
          {articles.map((article: any) => {
            return <Article key={article.id} {...article} />;
          })}
        </ArticleWrapper>
        <Pagination total={total} />
      </>
    );
  }
}
