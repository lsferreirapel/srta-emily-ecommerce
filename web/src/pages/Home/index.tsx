/* React imports */
import React from 'react';

/* Data - just to test */
import data from '../../data';

/* Components */
import Header from '../../components/Header';

/* Styles */
import Container from './styles';

const Home: React.FC = () => (
  <Container>
    <Header data={data} />
  </Container>
);

export default Home;
