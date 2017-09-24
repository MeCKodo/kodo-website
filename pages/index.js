import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default () => (
  <div>
    <Header />
    <Title>My page</Title>
  </div>
);
