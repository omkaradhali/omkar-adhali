import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p>
        &copy; Omkar Adhali {new Date().getFullYear()}. Made with{' '}
        <a href="https://www.gatsbyjs.com/">Gatsby</a>
      </p>
    </footer>
  );
}
