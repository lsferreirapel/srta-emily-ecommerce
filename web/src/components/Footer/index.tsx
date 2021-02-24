/* React imports */
import React from 'react';

/* Components */
import About from './About';
import Information from './Information';

/* Styles */
import Container from './styles';

const Footer: React.FC = () => (
  <Container>
    <Information />
    <About />
  </Container>
);

export default Footer;
