import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAction } from '../../../redux-store/action-creators/productActions';
import { Link } from 'react-router-dom';

import { Wrapper, Card, CardTitle } from './styled';

export const Products = () => {
  const { products } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);

  const render = products.map((item) => (
    <Link to={`/product/${item.id}`} key={item.id}>
      <Card bgImage={item.image}>
        <CardTitle>
          <p>Name: {item.title}</p>
          <p>Price: {item.price}</p>
        </CardTitle>
      </Card>
    </Link>
  ));

  if (!products || products.length <= 0) {
    return <span>Loading...</span>;
  }
  return <Wrapper>{render}</Wrapper>;
};
