import React from "react";
import App, { Container } from "next/app";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import "styles/index.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Header />
        <Banner />
        <Component {...pageProps} />
      </Container>
    );
  }
}
