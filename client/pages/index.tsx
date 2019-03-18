// import { NextContext } from "next";
import { Component } from 'react';
import axios from 'axios';
import { Article, ArticleWrapper } from '../components/Article';
import Pagination from '../components/Pagination';

type Props = {
  articles: any;
  total: number;
};

export default class extends Component<Props, Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      articles: [],
      total: 0,
    };
  }

  static async getInitialProps() {
    const res = await await axios.get<Props>(
      'http://localhost:3000/article/list?page=1&size=5',
    );
    const { articles, total } = res.data;

    return {
      articles,
      total,
    };
  }

  getArticles = async (page: number = 1, size: number = 15) => {
    const res = await axios.get<Props>(
      `http://localhost:3000/article/list?page=${page}&size=${size}`,
    );
    const { articles, total } = res.data;
    this.setState({
      articles,
      total,
    });
  };

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
        <Pagination onChange={this.getArticles} total={total} />
      </>
    );
  }
}
