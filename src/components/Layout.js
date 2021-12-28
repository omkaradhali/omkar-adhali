import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const ContentStyles = styled.div`
  padding: 2rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContentStyles>
        <Nav />
        {children}
        <Footer />
      </ContentStyles>
    </>
  );
}
