import { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: relative;
  width: 80%;
  margin: 0 auto;
`;
const NavLi = styled.li`
  border: 0;
  display: inline-block;
  height: 66px;
  line-height: 66px;
  font-size: 16px;
  position: relative;
  cursor: pointer;
  & a {
    display: inline-block;
    padding: 0 12px;
    white-space: nowrap;
    color: #fff;
    &:hover {
      color: #18bc9c;
    }
  }
`;
const MyAvatar = styled.div`
  position: absolute;
  top: 8px;
  right: 0;
  color: #fff;
  & figure {
    height: 50px;
    width: 50px;
    background: url(${props => props.url}) no-repeat;
    background-size: cover;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }
  span {
    font-size: 18px;
    margin: 0 10px;
    vertical-align: middle;
  }
`;
const MyQrcode = styled.div`
  position: absolute;
  left: -45px;
  top: 70px;
  background: #fff;
  text-align: center;
  font-size: 12px;
  width: 200px;
  padding: 15px 0;
  border-radius: 2px;
  display: ${props => (props.showQrcode ? 'block' : 'none')};
  box-shadow: 0 0 21px rgba(0, 0, 0, 0.28);
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  img {
    width: 100%;
  }
  p {
    color: #444;
  }
`;
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
