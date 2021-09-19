import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSingleProduct,
  removeSelectedProductAction,
} from '../../../redux-store/action-creators/productActions';

import { Wrapper, ProductSummary, ImageWrapper } from './styled';

export const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state);

  useEffect(() => {
    if (id && id !== '') dispatch(fetchSingleProduct(id));

    return () => {
      dispatch(removeSelectedProductAction());
    };
  }, [id]);

  if (!product || Object.keys(product).length === 0) {
    return <div>...Loading...</div>;
  }
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={product?.image} alt={product?.title} />
      </ImageWrapper>
      <ProductSummary>
        <h1>{product?.title}</h1>
        <p>Prie: ${product?.price}</p>
        <p>Rate: {product?.rating?.rate}</p>
        <p>Stock: {product?.rating?.count}</p>
        <p>Category: {product?.category}</p>
        <p>Description: {product?.description}</p>
      </ProductSummary>
    </Wrapper>
  );
};
