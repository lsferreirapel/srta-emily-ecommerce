/* React imports */
import React from 'react';

/* Data - just to test */
import data from '../../data';

/* Components */
import Header from '../../components/Header';
import Footer from '../../components/Footer';

/* Styles */
import Container from './styles';

const Home: React.FC = () => (
  <Container>
    <Header data={data} />
    <div className="content" />
    <Footer />
  </Container>
);

export default Home;
