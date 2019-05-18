import React from 'react';
import prism from 'prismjs';
import Link from 'next/link';

import { ArticleWrapper, Time, Tags, Title } from './style';

type ArticleProps = {
  id: string;
  title: string;
  ctime: string;
  badges: string[];
  urlAlias: string;
  body: React.ReactNode | JSX.Element;
  before?: React.ReactNode | JSX.Element;
  after?: React.ReactNode | JSX.Element;
};

class Article extends React.Component<ArticleProps> {
  componentDidMount() {
    prism.highlightAll(false);
  }
  render() {
    const {
      id,
      before,
      after,
      title,
      ctime,
      badges,
      body,
      urlAlias,
    } = this.props;
    return (
      <ArticleWrapper>
        {before}
        <Time>{ctime}</Time>
        <Link href={`/article/:${id}`} as={`/article/${urlAlias}`}>
          <Title>{title}</Title>
        </Link>
        <Tags>{badges.map((badge: string) => `#${badge}`)}</Tags>
        {body}
        {after}
      </ArticleWrapper>
    );
  }
}

export { Article };
