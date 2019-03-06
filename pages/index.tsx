// import { NextContext } from "next";
import { Component } from "react";
import axios from "axios";
import { Article, ArticleWrapper } from "../components/Article";

type Props = {
  articles: any;
  total: number;
};

export default class extends Component<Props> {
  static async getInitialProps({ req }: any) {
    const res = await axios.get("http://localhost:3001/articles?page=1");
    // console.log(res.data);
    const res1 = await axios.get("http://localhost:3000/json");
    console.log(res1, "----1");
    return res.data;

    // return {
    //   total: 0,
    //   articles: [{}, {}, {}]
    // };
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
