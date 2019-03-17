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
    const res = await axios.get('http://localhost:3000/article/list/1');
    // console.log(res.data);
    // const res1 = await axios.get('http://localhost:3000/json');
    // console.log(res1, '----1');
    return res.data;

    // return {
    //   total: 0,
    //   articles: [{}, {}, {}]
    // };
  }

  render() {
    const { articles } = this.props;
    console.log(articles, '---');
    return (
      <>
        <ArticleWrapper>
          {articles.map((article: any) => {
            return <Article key={article.id} {...article} />;
          })}
        </ArticleWrapper>
        <Pagination total={44} />
      </>
    );
  }
}
