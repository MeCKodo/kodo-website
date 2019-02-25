import { Component } from "react";
import styled from "styled-components";

import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default class extends Component {
  render() {
    return (
      <div id="home">
        <Header />
        <Banner />
        <Title>My page</Title>
      </div>
    );
  }
}
