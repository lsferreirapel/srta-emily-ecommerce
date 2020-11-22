import styled from 'styled-components';

export const Container = styled.div`
  /* Size */
  width: calc(100% - 300px);

  .line {
    /* Size */
    height: 2px;
    max-width: calc(100%);

    /* Colors */
    background: #c4c4c4;
  }
`;

export const LinkUtils = styled.div`
  /* Position */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  /* Size */
  max-width: 1100px;

  /* Margin and padding */
  margin: 0 auto;
  margin-bottom: 30px;
  padding-right: 30px;

  div {
    /* Position */
    display: flex;
    flex-direction: column;

    /* Size */
    max-width: 150px;
    height: 170px;
    max-height: 170px;

    h3 {
      /* Font */
      font-size: 12px;
      font-weight: 600; /* Semi-Bold */
    }

    a {
      /* Margin and padding*/
      margin-top: 25px;

      /* Font */
      font-size: 10px;
    }

    button {
      /* Margin and padding */
      padding: 10px 5px;
      margin-top: 25px;

      /* Border */
      border: 1px solid var(--color-gray-dark);

      /* Font */
      font-size: 13px;

      /* Effects */
      cursor: pointer;
    }
  }
`;
export const Payment = styled.div`
  /* Size */
  width: 100%;

  /* Margin and padding*/
  margin: 35px 0;
  padding-left: 80px;

  h2 {
    /* Position */
    display: flex;
    align-items: center;

    /* Font */
    font-size: 30px;
    font-weight: 600; /* Semi-Bold */

    svg {
      /* Margin andn padding */
      margin-right: 20px;
    }
  }
`;
export const PaymentIcons = styled.div`
  /* Position */
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Size */
  max-width: 650px;
  height: 100px;

  img {
    /* Size */
    width: 50px;
    height: 50px;

    /* Effect */
    cursor: pointer;
  }
  .img-G {
    /* Size */
    width: 100px;
    height: 100px;
  }
  .img-M {
    /* Size */
    width: 70px;
    height: 70px;
  }
  .img-P {
    /* Size */
    width: 50px;
    height: 35px;
  }
`;
export const Copy = styled.div`
  /* Position */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  /* Margin and padding*/
  margin-top: 25px;

  p {
    font-size: 10px;
    font-weight: 600; /* Semi-Bold */
    color: var(--color-gray-medium);

    a {
      /* Font */
      font-size: 10px;
      font-weight: 600; /* Semi-Bold */
      color: var(--color-gray-medium);

      /* Effect */
      transition: all 0.2s ease;

      &:hover {
        /* Font */
        color: var(--color-primary);
      }
    }
  }
`;
