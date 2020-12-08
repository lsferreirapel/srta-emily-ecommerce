/* React imports */
import React from 'react';

/* APIs import */
import {
  arrowsPlugin,
  autoplayPlugin,
  slidesToShowPlugin,
} from '@brainhubeu/react-carousel';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

/* Component */
import CarouselItem from './CarouselItem';

/* Styles */
import { Container, Offers } from './styles';

const OffersCarousel: React.FC = () => (
  <Container>
    <div className="line-left" />
    <h2 className="title">VEJA TAMBÉM</h2>
    <div className="line-right" />
    <Offers
      plugins={[
        'infinite',
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 4,
          },
        },
        {
          resolve: autoplayPlugin,
          options: {
            interval: 2000,
          },
        },
        {
          resolve: arrowsPlugin,
          options: {
            arrowLeft: (
              <FiChevronLeft size={100} color="#000000" strokeWidth={0.5} />
            ),
            arrowLeftDisabled: (
              <FiChevronLeft size={100} color="#BDBDBD" strokeWidth={0.5} />
            ),
            arrowRight: (
              <FiChevronRight size={100} color="#000000" strokeWidth={0.5} />
            ),
            arrowRightDisabled: (
              <FiChevronRight size={100} color="#BDBDBD" strokeWidth={0.5} />
            ),
            addArrowClickHandler: true,
          },
        },
      ]}
    >
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </Offers>
  </Container>
);

export default OffersCarousel;
