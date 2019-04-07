// import { NextContext } from "next";
import { Component } from 'react';
import axios from 'axios';
import marked from 'marked';

import {
  Article,
  ArticleList,
  ReadMore,
  ListContent,
} from '../components/Article';
import Pagination from '../components/Pagination';

type Props = {
  articles: any;
  total: number;
};

type State = {
  articlesState: any;
};

export default class extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      articlesState: null,
      // total: 0,
    };
  }

  static async getInitialProps() {
    const res = await await axios.get<Props>(
      'http://localhost:3000/article/list?page=1&size=10',
    );
    const { articles, total } = res.data;

    return {
      articles,
      total,
    };
  }

  getArticles = async (page: number = 1, size: number = 10) => {
    const res = await axios.get<Props>(
      `http://localhost:3000/article/list?page=${page}&size=${size}`,
    );
    const { articles } = res.data;
    console.log('get article', page, articles);
    this.setState({
      articlesState: articles,
    });
    window.scrollTo(0, 0);
  };

  render() {
    const { articlesState } = this.state;
    const { articles, total } = this.props;
    // console.log(articles, total, '--- render');
    // console.log(articles);
    return (
      <>
        <ArticleList>
          {(articlesState || articles).map((article: any) => {
            const html = marked(decodeURIComponent(article.content));

            return (
              <Article
                key={article.id}
                after={<ReadMore objectId={article.id} as={article.urlAlias} />}
                body={
                  <ListContent
                    className="article markdown-body"
                    dangerouslySetInnerHTML={{
                      __html: html,
                    }}
                  />
                }
                {...article}
              />
            );
          })}
        </ArticleList>
        <Pagination onChange={this.getArticles} total={total} />
      </>
    );
  }
}
