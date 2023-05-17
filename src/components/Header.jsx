import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderArea = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: crimson;
  margin-bottom: 50px;
  padding: 20px;

  img {
    position: relative;
    right: 100px;
    top: 15px;
    height: 100px;
    -moz-transform: scale(3);
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderArea>
      <img src="./Logo.png" alt="" />
      <Link to={'/'}>Store</Link>
      <Link to={'/cart'}>Cart</Link>
    </HeaderArea>
  );
};

export default Header;
