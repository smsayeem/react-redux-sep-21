import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  height: 130px;
  background-color: var(--color-primary-1);
  box-shadow: var(--light-shadow);
  display: flex;
  justify-content: center;
  color: var(--color-dark-1);
`;

export const Container = styled.div`
  width: var(--max-width);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    border-radius: 4px;
    margin: 6px;
    transition: var(--transition);
    color: #333;

    :hover,
    :active {
      background-color: var(--color-dark-1);
      color: var(--color-white);
      box-shadow: var(--dark-shadow);
    }
  }
  a {
    display: inline-block;
    padding: 10px 18px;
    width: 100px;
    color: inherit;
  }
`;
