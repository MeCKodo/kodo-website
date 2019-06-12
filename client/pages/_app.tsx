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
          <meta name="keywords" content="二哲,meckodo,前端工程师,nodeJS" />
          <meta
            name="description"
            content="像我这样毫无能力又没有色彩的人 ,也就只能在失去中成长了吧"
          />
          <meta
            name="viewport"
            content="initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"
          />
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
