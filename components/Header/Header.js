import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 66px;
  color: #000;
  z-index: 9999;
  transition: all 0.3s;
  &:before {
    content: "adf ";
  }
`;

export default function() {
  return <Header>asd</Header>;
}
