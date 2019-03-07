import styled from 'styled-components';

const Footer = styled.footer`
  position: relative;
  height: 160px;
  border-top: 1px solid #eee;
  margin: 30px 0 0;
  color: hsla(0, 0%, 100%, 0.69);
  font-size: 12px;
  text-align: center;
  border-top: 2px dashed #98b7ff;
  transition: height 0.1s 1s;
`;

const CopyRight = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  background: #0e0e0e;
  width: 100%;
  height: 100%;
  transform-origin: 100% 0;
  transition: all 0.5s;
  z-index: 2;
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 2;
  }
`;

const Superise = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #06060b;
  color: hsla(0, 0%, 100%, 0.86);
  text-align: center;
  overflow: hidden;
  z-index: 1;
  p {
    color: #000;
    font-size: 16px;
    padding: 35px 0;
    transition: 1.5s ease 1.5s;
  }
  form {
    transition: 1.5s ease 2.5s;
    opacity: 0;
  }
  input {
    display: inline-block;
    margin: 0 0 20px;
    width: 280px;
    height: 25px;
    padding: 10px 15px;
    background: rgba(21, 24, 68, 0.5);
    color: #fff;
    border: 1px solid rgba(34, 43, 95, 0.79);
    border-radius: 50px;
    transition: 0.5s ease;
  }
  button {
    display: inline-block;
    border: 0;
    padding: 8px 75px;
    background: rgba(183, 5, 5, 0.8);
    margin: 10px 0 40px;
    border-radius: 5px;
    font-size: 18px;
    color: hsla(0, 0%, 92%, 0.9);
    transition: 0.25s ease;
    cursor: pointer;
  }
`;

export { Footer, CopyRight, Superise };
