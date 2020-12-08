import styled from 'styled-components';
import Carousel from '@brainhubeu/react-carousel';

export const Container = styled.div`
  /* Position */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Size */
  width: 100%;
  height: 520px;

  /* Color */
  background: var(--color-gray-lighter);

  .title {
    /* Position */
    position: absolute;
    top: -16px;

    /* Font */
    font-size: 25px;
    font-weight: 700; /* Bold */
  }

  .line-left {
    /* Position */
    position: absolute;
    left: 2%;
    top: 0;

    /* Size */
    width: 38%;
    height: 2px;

    /* Color */
    background: var(--color-gray-light);
  }

  .line-right {
    /* Position */
    position: absolute;
    right: 2%;
    top: 0;

    /* Size */
    width: 38%;
    height: 2px;

    /* Color */
    background: var(--color-gray-light);
  }
`;

export const Offers = styled(Carousel)`
  /* Size */
  width: 1300px;
  max-width: 1340px;

  /* Margin and Padding */
  margin: 0 auto;
`;
