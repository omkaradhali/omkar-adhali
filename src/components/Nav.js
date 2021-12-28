import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  background: rgba(255, 255, 255, 0.08);
  margin-bottom: 3rem;
  padding: 2rem;
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
    grid-gap: 2rem;
    align-items; center;
  }
  a {
    font-size: 2rem;
    text-decoration: none;
    &:hover {
      color: var(--white);
      border-bottom: 3px solid var(--white);
    }
  }

`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <Logo />
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <></>
        </li>
      </ul>
    </NavStyles>
  );
}
