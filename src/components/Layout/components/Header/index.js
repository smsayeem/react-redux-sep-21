import React from 'react';
import { Link } from 'react-router-dom';

import { FlexWrapper, Container, Nav } from './styled';

export const Header = () => {
  return (
    <FlexWrapper>
      <Container>
        <header>
          <h1>Fake Store API</h1>
        </header>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/search">NPM packages</Link>
            </li>
          </ul>
        </Nav>
      </Container>
    </FlexWrapper>
  );
};
