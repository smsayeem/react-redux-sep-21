import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { Wrapper, BodyContent } from './styled';

export function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      <BodyContent>{children}</BodyContent>
      <Footer />
    </Wrapper>
  );
}
