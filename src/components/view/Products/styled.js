import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid var(--color-white);
  border-radius: 4px;
`;

export const Card = styled.div`
  display: flex;
  align-items: flex-end;
  height: 400px;
  width: 370px;
  background-color: var(--color-grey);
  margin: 12px;
  border-radius: 6px;
  padding: 8px;
  background: url(${(props) => props.bgImage});
  background-size: cover;
  box-shadow: var(--light-shadow);
  opacity: 0.85;
  transition: all 0.2s linear;

  :hover {
    opacity: 1;
    transform: scale(1.01);
    box-shadow: var(--dark-shadow);
  }
`;

export const CardTitle = styled.div`
  background-color: var(--color-dark-transparent);
  color: var(--color-white);
  padding: 4px 12px;
  width: 100%;
  border-radius: 4px;
`;
