// import { NextContext } from "next";
import { Component } from "react";
import styled from "styled-components";
import axios from "axios";
// import Header from "../components/Header/Header";
// import Banner from "../components/Banner/Banner";
import Article from "../components/Article/Article";

const Title = styled.h1`
  color: red;
  font-size: 10px;
`;

export default class extends Component {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const res = await axios("https://api.github.com/repos/zeit/next.js");
    console.log(res.data);
    return {};
  }
  render() {
    return (
      <div id="home">
        {/* <Header /> */}
        {/* <Banner /> */}
        <Article />
        <Title>My page</Title>
      </div>
    );
  }
}
