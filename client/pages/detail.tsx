import React from 'react';
import { NextContext } from 'next';
import { Component } from 'react';

import marked from 'marked';
import { Article, Content } from '@/components/Article';
import { ArticleModel } from '@/model/blog';
import http from '@/utils/http';

type Props = {
  detail: ArticleModel;
};

export default class extends Component<Props> {
  static async getInitialProps({ query }: NextContext) {
    console.log('SLUG--------', query);
    const res = await http.get(`/article/detail/${query.id}`);
    console.log(res.data, '------c');
    return {
      detail: res.data,
    };
  }

  render() {
    const { detail } = this.props;
    console.log(detail, '--- detail props');
    const html = marked(decodeURIComponent(detail.content));
    return (
      <Article
        {...detail}
        body={
          <Content
            className="article markdown-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        }
      />
    );
  }
}
