import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductSummary = styled.div`
  max-width: 50%;
  padding: 12px;
  margin: 24px;
  box-shadow: var(--light-shadow);
`;

export const ImageWrapper = styled.div`
  height: auto;
  margin: 24px;
  border-radius: 6px;
  max-width: 50%;

  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
  }
`;
