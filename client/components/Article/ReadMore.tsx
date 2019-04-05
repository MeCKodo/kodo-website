import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 25px 0 20px;
  a {
    display: inline-block;
    color: #18bc9c;
    cursor: pointer;
    padding: 4px 20px;
    border-radius: 5px;
    border: 1px solid #18bc9c;
    transition: all 0.5s;
    &:hover {
      text-shadow: 4px 5px 9px rgba(25, 181, 150, 0.3);
    }
  }
`;

type ReadMoreProps = {
  objectId: string;
  as: string;
};

const ReadMore = (props: ReadMoreProps) => {
  const { objectId, as } = props;
  return (
    <Wrapper>
      <Link href={`/detail/:${objectId}`} as={`/detail/${as}`}>
        <a>阅读更多</a>
      </Link>
    </Wrapper>
  );
};

export { ReadMore };
