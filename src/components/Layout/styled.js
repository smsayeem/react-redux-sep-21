import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: var(--color-grey);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BodyContent = styled.div`
  width: var(--max-width);
  margin: 10px auto;
  height: 100%;
  background-color: var(--color-grey);
`;
