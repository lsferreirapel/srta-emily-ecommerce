/* React imports */
import React from 'react';

/* Data - just to test */
import data from '../../data';

/* Components */
import Footer from '../../components/Footer';
import Header from '../../components/Header';

/* Styles */
import { Container } from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Header data={data} />

    <Footer />
  </Container>
);

export default Dashboard;
