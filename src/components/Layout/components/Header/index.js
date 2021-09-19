import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Container, Nav } from './styled';

export const Header = () => {
  return (
    <Wrapper>
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
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Nav>
      </Container>
    </Wrapper>
  );
};
