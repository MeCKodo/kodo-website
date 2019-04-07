import React from 'react';
import prism from 'prismjs';
// import marked from 'marked';
import { ArticleWrapper, Time, Tags, Title } from './style';

type ArticleProps = {
  title: string;
  ctime: string;
  badges: string[];
  body: React.ReactNode | JSX.Element;
  before?: React.ReactNode | JSX.Element;
  after?: React.ReactNode | JSX.Element;
};

class Article extends React.Component<ArticleProps> {
  componentDidMount() {
    prism.highlightAll(false);
  }
  render() {
    const { before, after, title, ctime, badges, body } = this.props;
    // const html = decodeURIComponent(
    //   encodeURIComponent(marked(decodeURIComponent(content))),
    // ).substring(0, 100);
    // console.log(html);
    return (
      <ArticleWrapper>
        {before}
        <Time>{ctime}</Time>
        <Title>{title}</Title>
        <Tags>{badges.map((badge: string) => `#${badge}`)}</Tags>
        {body}
        {/* <Content
          className="article markdown-body"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        /> */}
        {after}
      </ArticleWrapper>
    );
  }
}

export { Article };
