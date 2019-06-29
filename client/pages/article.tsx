import React from 'react';
import { NextContext } from 'next';
import { Component } from 'react';
import Head from 'next/head';
import marked from 'marked';
import http from '@/utils/http';
import { Article, Content, ArticleFooter, Text } from '@/components/Article';
import { ArticleModel } from '@/model/blog';

type Props = {
  detail: ArticleModel;
};

export default class extends Component<Props> {
  static async getInitialProps({ query }: NextContext) {
    const res = await http.get(`/article/detail/${query.id}`);
    return {
      detail: res.data,
    };
  }

  render() {
    const { detail } = this.props;
    const html = marked(decodeURIComponent(detail.content));
    return (
      <>
        <Head>
          <title>{detail.title}</title>
        </Head>
        <Article
          {...detail}
          body={
            <Content
              className="article markdown-body"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          }
          after={
            <ArticleFooter>
              <img
                style={{ maxWidth: '200px', display: 'inline-block' }}
                src="/static/my-qrcode.jpg"
              />
              <Text>我是二哲，一个「伪作家」</Text>
            </ArticleFooter>
          }
        />
      </>
    );
  }
}
