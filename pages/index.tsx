// import { NextContext } from "next";
import { Component } from "react";
import axios from "axios";
import { Article, ArticleWrapper } from "../components/Article";

type Props = {
  articles: any;
  total: number;
};

export default class extends Component<Props> {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const res = await axios.get("http://localhost:3001/articles?page=1");
    const { articles, total } = res.data;
    return {
      total,
      articles
    };
  }

  render() {
    const { articles } = this.props;
    console.log(articles, "---");
    return (
      <ArticleWrapper>
        {articles.map((article: any) => {
          return <Article key={article._id} {...article} />;
        })}
      </ArticleWrapper>
    );
  }
}
