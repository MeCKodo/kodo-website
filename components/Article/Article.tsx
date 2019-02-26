import React from "react";
import { ArticleWrapper, Time, Tags, Title, ReadMore, Content } from "./style";

class Article extends React.Component {
  render() {
    return (
      <ArticleWrapper>
        <Time>2018年01月01日</Time>
        <Title>title</Title>
        <Tags>tags</Tags>
        <Content>sdfsdfsdfsdf</Content>
        <ReadMore>
          <a>阅读更多</a>
        </ReadMore>
      </ArticleWrapper>
    );
  }
}

export default Article;
