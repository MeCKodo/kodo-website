import { Component } from 'react';
import * as style from './style';

class Footer extends Component {
  render() {
    return (
      <style.Footer>
        <style.CopyRight>
          <p>
            Copyright © 2014-2017 二哲. All Rights Reserved. <br /> Powered by
            Next.js + MongoDB
          </p>
        </style.CopyRight>
        <style.Superise>
          <p>恭喜你，发现了我的秘密。在此输入你的邮箱和名字，即可订阅我。</p>
          <form>
            <input type="text" placeholder="你的昵称" /> <br />{' '}
            <input type="text" placeholder="你的邮箱" /> <br />{' '}
            <button>订阅</button>{' '}
          </form>
        </style.Superise>
      </style.Footer>
    );
  }
}

export default Footer;
