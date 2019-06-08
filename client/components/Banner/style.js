import styled from 'styled-components';

export const Banner = styled.div`
  position: relative;
  background: url('/static/kodo_banner.png') no-repeat gray;
  background-size: cover;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
  @media only screen and (min-width: 768px) {
    & p {
      padding: 210px 0;
    }
  }

  @media only screen and (min-width: 640px) {
    & p {
      font-size: 26px;
      i {
        font-size: 22px;
      }
    }
  }
`;

export const Title = styled.p`
  position: relative;
  padding: 95px 0 70px;
  color: hsla(0, 0%, 100%, 0.9);
  text-align: center;
  font-size: 14px;
  line-height: 2;
  z-index: 2;
  letter-spacing: 2.5px;
  text-shadow: 0 3px 25px rgba(0, 0, 0, 0.3);
  cursor: progress;
  i {
    text-decoration: line-through;
    font-size: 12px;
    color: hsla(0, 0%, 100%, 0.8);
    text-shadow: 0 0 0 transparent;
  }
`;
