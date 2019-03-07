import styled from 'styled-components';

const ArticleWrapper = styled.article`
  position: relative;
  padding: 0 20px;
  margin: 40px auto;
  background: #fff;
  text-align: center;
  box-shadow: 5px 5px 25px #dadada;
`;

const Time = styled.time`
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  padding: 4px 5px 0;
  color: #999;
`;

const Tags = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  color: #999;
  padding: 3px 10px;
  background: #f1f1f1;
  font-size: 14px;
`;

const Title = styled.h2`
  padding: 35px 0 25px;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
`;

const Content = styled.section`
  text-align: left;
  padding: 10px;
  font-size: 16px;
`;

const ReadMore = styled.footer`
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

export { ArticleWrapper, Time, Tags, Title, ReadMore, Content };
