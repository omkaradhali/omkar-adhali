import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const LogoStyles = styled.li`
  cursor: pointer;
  font-family: 'Roboto Slab', serif;
  src: url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100&display=swap');
`;

export default function Logo() {
  return (
    <LogoStyles>
      <Link to="/">Omkar Adhali</Link>
    </LogoStyles>
  );
}
