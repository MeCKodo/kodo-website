import React from 'react';

import { NextContext } from 'next';
import { Component } from 'react';
import axios from 'axios';
import { Article } from '../components/Article';

type Props = {
  detail: any;
};

export default class extends Component<Props> {
  static async getInitialProps({ query }: NextContext) {
    console.log('SLUG--------', query);
    // eslint-disable-next-line no-undef
    const res = await axios.get(
      `http://localhost:3000/article/detail/${query.id}`,
    );
    // const { articles } = res.data;
    console.log(res.data, '------c');
    // console.log('???SDfsdfsdfsdfsdfs');
    return {
      detail: res.data,
    };
  }

  render() {
    const { detail } = this.props;
    console.log(detail, '--- detail props');
    return <Article {...detail} />;
  }
}
