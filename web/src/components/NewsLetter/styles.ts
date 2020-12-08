import styled from 'styled-components';

export const Container = styled.div`
  /* Position */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Size */
  max-width: 1180px;
  min-height: 180px;

  /* Border */
  border: 3px solid var(--color-gray-light);
  border-radius: 5px;

  /* Margin and padding */
  padding: 5px 40px;
  padding-right: 30px;
  margin: 70px auto;

  img {
    /* Size */
    width: 150px;
    height: 150px;
  }
`;
export const SendOffers = styled.div`
  /* Position */
  display: flex;
  flex-direction: column;

  /* Size */
  width: 33%;
  max-height: 102px;

  h2 {
    /* Font */
    font-size: 20px;
    font-weight: 600; /* Semi-Bold */

    strong {
      /* Font */
      color: var(--color-primary-medium);
      font-weight: 700; /* Bold */
    }
  }

  p {
    /* Font */
    font-size: 16px;
  }
`;
export const EmailForm = styled.div`
  /* Margin and padding */
  margin-top: 15px;

  input {
    /* Size */
    height: 40px;
    width: 225px;

    /* Border */
    border: 1px solid var(--color-gray-light);

    /* Margin and padding */
    padding: 0 15px;
    margin-right: 10px;

    /* Font */
    font-size: 14px;
  }

  button {
    /* Size */
    height: 40px;

    /* Margin and padding*/
    padding: 0 25px;

    /* Color */
    background: var(--color-primary-medium);

    /* Font */
    font-size: 16px;
    font-weight: 700; /* Bold */
    color: #ffffff;

    /* Effects */
    cursor: pointer;
  }
`;

export const SocialShare = styled.div`
  /* Position */
  display: flex;
  flex-direction: column;

  /* Size */
  width: 41.5%;
  max-height: 130px;

  h3 {
    /* Font */
    font-size: 16px;
    font-weight: 600; /* Semi-Bold */
  }

  p {
    /* Size */
    width: 291px;

    /* Margin */
    margin: 0 auto;

    /* Font */
    font-size: 12px;
  }
`;

export const Icons = styled.div`
  /* Position */
  display: flex;
  justify-content: space-around;
  align-items: center;

  /* Size */
  width: 240px;

  /* Margin and padding */
  margin: 20px auto;

  img {
    /* Size */
    width: 35px;
    height: 35px;

    /* Effects */
    cursor: pointer;
  }
`;
