/* React imports */
import React from 'react';

/* Styles */
import Container from './styles';

interface DiscountLabelProps {
  value: number;
}

const DiscountLabel = ({ value }: DiscountLabelProps): JSX.Element => (
  <Container>
    <h2>{value}% OFF</h2>
  </Container>
);

export default DiscountLabel;
