import React from 'react';

import { ArticleWrapper, Time, Tags, Title, Content } from './style';

type ArticleProps = {
  title: string;
  ctime: string;
  before?: React.ReactNode | JSX.Element;
  after?: React.ReactNode | JSX.Element;
};

class Article extends React.Component<ArticleProps> {
  render() {
    const { before, after, title = 'title', ctime = 'sdf' } = this.props;

    return (
      <ArticleWrapper>
        {before}
        <Time>{ctime}</Time>
        <Title>{title}</Title>
        <Tags>tags</Tags>
        <Content>sdfsdfsdfsdf</Content>
        {after}
      </ArticleWrapper>
    );
  }
}

export { Article };
