import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/frenchfries.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Josefin Slab', serif;
    src: url('https://fonts.googleapis.com/css2?family=Josefin+Slab&display=swap');
  }
  html {
    font-family: 'Josefin Slab', serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--white);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }

  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
