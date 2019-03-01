import React from "react";

import { ArticleWrapper, Time, Tags, Title, ReadMore, Content } from "./style";

class Article extends React.Component<any> {
  render() {
    const { title, ctime } = this.props;

    return (
      <ArticleWrapper>
        <Time>{ctime}</Time>
        <Title>{title}</Title>
        <Tags>tags</Tags>
        <Content>sdfsdfsdfsdf</Content>
        <ReadMore>
          <a>阅读更多</a>
        </ReadMore>
      </ArticleWrapper>
    );
  }
}

export { Article };
