import { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 100px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-size: 14px;
  color: 333;
  border: 1px solid #18bc9c;
  border-radius: 4px;
`;

const Pages = styled.div`
  display: flex;

  input {
    text-align: center;
    border: 0;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
  }
  span {
    margin: 0 12px;
  }
`;

type Prop = {
  total: number;
};

class Pagination extends Component<Prop> {
  constructor(prop: Prop) {
    super(prop);
  }
  render() {
    return (
      <Wrapper>
        <Button>上一页</Button>
        <Pages>
          <input size={3} type="text" value="1" />
          <span>/</span>
          <div>10</div>
        </Pages>
        <Button>下一页</Button>
      </Wrapper>
    );
  }
}

export default Pagination;
