import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const LinkImage = styled(Link)``;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }

  @media (max-width: 600px) {
    /* align-self: flex-end; */
  }
`;
