import React from "react";
import Link from "next/link";

import { ArticleWrapper, Time, Tags, Title, ReadMore, Content } from "./style";

class Article extends React.Component<any> {
  render() {
    const { title = "title", ctime = "sdf" } = this.props;

    return (
      <ArticleWrapper>
        <Time>{ctime}</Time>
        <Title>{title}</Title>
        <Tags>tags</Tags>
        <Content>sdfsdfsdfsdf</Content>
        <ReadMore>
          <Link href="/detail">
            <a>阅读更多</a>
          </Link>
        </ReadMore>
      </ArticleWrapper>
    );
  }
}

export { Article };
