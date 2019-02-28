// import { NextContext } from "next";
import { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Article from '../components/Article/Article';

const Title = styled.h1`
  color: red;
  font-size: 10px;
`;

type Props = {
  articles: any;
  total: number;
};

export default class extends Component<Props> {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const res = await axios.get('http://localhost:3001/articles?page=1');
    const { articles, total } = res.data;
    return {
      total,
      articles,
    };
  }

  render() {
    const { articles } = this.props;
    console.log(articles, '---');
    return (
      <div id="home">
        <Header />
        <Banner />
        {articles.map((article: any) => {
          return <Article key={article._id} {...article} />;
        })}
        <Title>My page</Title>
      </div>
    );
  }
}
