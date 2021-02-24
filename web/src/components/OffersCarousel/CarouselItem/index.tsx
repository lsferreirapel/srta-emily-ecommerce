/* React imports */
import React from 'react';

/* Components */
import FavIcon from '../../UI/FavIcon';

/* Styles */
import { Container, Photo } from './styles';

/* Assets */
import IMG1 from '../../../assets/images/clothes/330xN (1).jpg';

const CarouselItem: React.FC = () => (
  <Container>
    <Photo>
      <FavIcon />
      <img src={IMG1} alt="Roupa" />
    </Photo>
    <h3>Macacão longo</h3>
    <h2>R$ 369,00</h2>
    <h4>
      <span>3</span>x R$ <span>129,02</span> sem juros
    </h4>
  </Container>
);

export default CarouselItem;
