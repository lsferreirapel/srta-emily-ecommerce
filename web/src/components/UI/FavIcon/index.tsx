/* React imports */
import React from 'react';

/* APIs import */
import { FiHeart } from 'react-icons/fi';

/* Styles */
import Container from './styles';

const FavIcon: React.FC = () => (
  <Container>
    <FiHeart size={24} color="#FFCACD" />
  </Container>
);

export default FavIcon;
