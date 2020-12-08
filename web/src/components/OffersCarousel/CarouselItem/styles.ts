import styled from 'styled-components';

export const Container = styled.div`
  /* Position */
  display: flex;
  flex-direction: column;

  h3 {
    /* Font */
    font-size: 20px;
    font-weight: 500; /* Medium */
  }

  h2 {
    /* Font */
    font-size: 25px;
    font-weight: 600; /* Semi-Bold */
    color: var(--color-primary);
  }

  h4 {
    /* Font */
    font-size: 20px;
    font-weight: 400; /* Regular */

    span {
      /* Font */
      color: var(--color-primary);
    }
  }
`;

export const Photo = styled.div`
  /* Position */
  position: relative;

  /* Size */
  width: 250px;
  height: 250px;

  /* Effects */
  overflow: hidden;

  img {
    /* Size */
    width: 100%;
    height: auto;
  }
`;
