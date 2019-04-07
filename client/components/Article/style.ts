import styled from 'styled-components';

const ArticleWrapper = styled.section`
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

const Content = styled.div`
  text-align: left;
  padding: 10px;
  font-size: 16px;
  word-break: break-word;
`;

const ListContent = styled(Content)`
  position: relative;
  max-height: 320px;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: linear-gradient(
      rgba(230, 230, 230, 0.11),
      rgba(70, 70, 70, 0.08),
      rgba(68, 68, 68, 0.12),
      rgba(51, 51, 51, 0.17)
    );
    pointer-events: none;
  }
`;

export { ArticleWrapper, Time, Tags, Title, Content, ListContent };
