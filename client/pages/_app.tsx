import Head from 'next/head';
import React from 'react';
import App, { Container } from 'next/app';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer';
import '@/styles/index.css';
import '@/styles/markdown.css';

const Main = styled.main`
  width: 90%;
  max-width: 950px;
  margin: 0 auto;
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>二哲 | 为了想保护的人而努力</title>
        </Head>
        <Header />
        <Banner />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </Container>
    );
  }
}
