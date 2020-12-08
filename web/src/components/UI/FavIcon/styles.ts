import styled from 'styled-components';

export default styled.div`
  /* Position */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Size */
  width: 50px;
  height: 50px;

  /* Border */
  border-radius: 50%;

  /* Color */
  background: var(--color-primary);

  /* Effects */
  transition: all 0.3s ease-in-out;
  opacity: 0.6;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;
