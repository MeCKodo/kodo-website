import styled from "styled-components";
import Nav from "./Nav";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 66px;
  color: #000;
  z-index: 9999;
  transition: all 0.3s;

  background: hsla(0, 0%, 100%, 0.86);
  box-shadow: 0 0 25px #ccc;
  color: #999;
`;

export default function() {
  return (
    <Header>
      <Nav />
    </Header>
  );
}
