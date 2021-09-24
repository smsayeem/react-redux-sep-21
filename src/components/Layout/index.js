import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { Wrapper, BodyContent } from './styled';

export function Layout({ children }) {
  return (
    <Wrapper>
      <div>
        <Header />
        <BodyContent>{children}</BodyContent>
      </div>
      <Footer />
    </Wrapper>
  );
}
