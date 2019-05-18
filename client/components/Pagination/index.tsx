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
  cursor: pointer;
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
  onChange: Function;
};

type State = {
  current: number;
  totalPage: number;
};

const PAGE_SIZE = 10;

class Pagination extends Component<Prop, State> {
  constructor(props: Prop) {
    super(props);
    this.state = {
      current: 1,
      totalPage: Math.ceil(props.total / PAGE_SIZE),
    };
  }

  nextPage = () => {
    const { current, totalPage } = this.state;
    if (current === totalPage) return;

    this.setState({
      current: current + 1,
    });
    this.props.onChange(current + 1);
  };

  prevPage = () => {
    const { current } = this.state;
    if (current === 1) return;

    this.setState({
      current: current - 1,
    });
    this.props.onChange(current - 1);
  };

  jumpPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    const { totalPage } = this.state;
    if (typeof val !== 'number' || val > totalPage || val < 1) {
      alert('你不要给我搞事情？');
      return;
    }
    this.props.onChange(val);
  };

  render() {
    const { totalPage, current } = this.state;
    return (
      <Wrapper>
        <Button onClick={this.prevPage}>上一页</Button>
        <Pages>
          {/* <input
            size={3}
            type="text"
            onBlur={this.jumpPage}
            value={current}
            defaultValue={String(current)}
          />
          <span>/</span> */}
          <div>
            {current}/{totalPage}页
          </div>
        </Pages>
        <Button onClick={this.nextPage}>下一页</Button>
      </Wrapper>
    );
  }
}

export default Pagination;
