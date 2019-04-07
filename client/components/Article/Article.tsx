import React from 'react';
import prism from 'prismjs';
import marked from 'marked';
import { ArticleWrapper, Time, Tags, Title, Content } from './style';

type ArticleProps = {
  title: string;
  ctime: string;
  badges: string[];
  content: string;
  before?: React.ReactNode | JSX.Element;
  after?: React.ReactNode | JSX.Element;
};

class Article extends React.Component<ArticleProps> {
  componentDidMount() {
    prism.highlightAll(false);
  }
  render() {
    const { before, after, title, ctime, badges, content } = this.props;

    return (
      <ArticleWrapper>
        {before}
        <Time>{ctime}</Time>
        <Title>{title}</Title>
        <Tags>{badges.map((badge: string) => `#${badge}`)}</Tags>
        <Content
          className="article markdown-body"
          dangerouslySetInnerHTML={{
            __html: marked(decodeURIComponent(content)).substring(0, 200),
          }}
        />
        {after}
      </ArticleWrapper>
    );
  }
}

export { Article };
