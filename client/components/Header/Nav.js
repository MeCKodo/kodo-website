import { Component } from 'react';
import { Nav, NavLi, MyAvatar, MyQrcode } from './style';

const NavList = () => {
  return (
    <ul>
      <NavLi>
        <a href="http://www.meckodo.com">首页</a>
      </NavLi>
      <NavLi>
        <a href="https://github.com/MeCKodo/myDemo" target="_blank">
          DEMO
        </a>
      </NavLi>
      <NavLi>
        <a href="https://github.com/MeCKodo/" target="_blank">
          Github
        </a>
      </NavLi>
    </ul>
  );
};
const Qrcode = props => {
  return (
    <MyQrcode showQrcode={props.showQrcode}>
      <img src={props.qrcode} />
      <p>来扫(cao)我啊!</p>
    </MyQrcode>
  );
};
class MyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQrcode: false,
    };
  }
  mouseOver = () => {
    this.setState(prevState => ({
      showQrcode: !prevState.showQrcode,
    }));
  };
  render() {
    return (
      <MyAvatar onMouseEnter={this.mouseOver} url="/static/me.jpg">
        <figure />
        <span>订阅我</span>
        <Qrcode
          showQrcode={this.state.showQrcode}
          qrcode="/static/my-qrcode.jpg"
        />
      </MyAvatar>
    );
  }
}
export default class extends Component {
  render() {
    return (
      <Nav>
        <NavList />
        <MyInfo />
      </Nav>
    );
  }
}
