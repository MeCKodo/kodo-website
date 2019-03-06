// import { NextContext } from "next";
import { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Article, ArticleWrapper } from '../components/Article';
import Pagination from '../components/Pagination';

type Props = {
  articles: any;
  total: number;
};

const Container = styled.main`
  width: 90%;
  margin: 0 auto;
`;

export default class extends Component<Props> {
  static async getInitialProps({ req }: any) {
    const res = await axios.get('http://localhost:3001/articles?page=1');
    // console.log(res.data);
    const res1 = await axios.get('http://localhost:3000/json');
    console.log(res1, '----1');
    return res.data;

    // return {
    //   total: 0,
    //   articles: [{}, {}, {}]
    // };
  }

  render() {
    const { articles } = this.props;
    console.log(articles, '---');
    return (
      <Container>
        <ArticleWrapper>
          {articles.map((article: any) => {
            return <Article key={article._id} {...article} />;
          })}
        </ArticleWrapper>
        <Pagination />
      </Container>
    );
  }
}
