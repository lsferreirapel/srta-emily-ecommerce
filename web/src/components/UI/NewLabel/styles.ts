import styled from 'styled-components';

export default styled.div`
  /* Position */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Size */
  width: 65px;
  height: 30px;

  /* Color */
  background: var(--color-primary-medium);

  h2 {
    /* Font */
    font-size: 14px;
    font-weight: 700; /* Bold */
    color: #ffffff;
  }

  &:after {
    content: '';

    /* Position */
    position: absolute;
    right: -15px;

    /* Border */
    border: 15px solid var(--color-primary-medium);
    border-right-color: transparent;
  }
`;
