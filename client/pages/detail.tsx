import React from 'react';

import { NextContext } from 'next';
import { Component } from 'react';
// import axios from "axios";
import { ArticleWrapper } from '../components/Article';

type Props = {
  article: any;
};

export default class extends Component<Props> {
  static getInitialProps({ query }: NextContext) {
    console.log('SLUG--------', query);
    // eslint-disable-next-line no-undef
    // const res = await axios.get("http://localhost:3001/articles?page=1");
    // const { articles } = res.data;
    // console.log(c, "------c");
    console.log('???SDfsdfsdfsdfsdfs');
    return {
      article: {},
    };
  }

  render() {
    const { article } = this.props;
    console.log(article, '---', this.props);
    return <ArticleWrapper>sdfsfd sdfsdfsdfsdf</ArticleWrapper>;
  }
}
