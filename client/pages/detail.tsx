import React from 'react';

// import { NextContext } from "next";
import { Component } from 'react';
// import axios from "axios";
import { Article, ArticleWrapper } from '../components/Article';

type Props = {
  article: any;
};

export default class extends Component<Props> {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    // const res = await axios.get("http://localhost:3001/articles?page=1");
    // const { articles } = res.data;
    // console.log(c, "------c");
    return {
      article: {},
    };
  }

  render() {
    const { article } = this.props;
    console.log(article, '---');
    return (
      <ArticleWrapper>
        <Article {...article} />
        sdfsdfsdfsdf
      </ArticleWrapper>
    );
  }
}
