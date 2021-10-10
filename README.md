# React-Redux App

[react, redux, redux-thunk, styled-components, react-router]

## features:

- nice css styling with layout
- navigation with react router
- Pages: Home, About, Products, npm packages search
  --Products: collections of products
  prodduct: single product
  --npm packages search: search valid npm packages

### product

- it imports product data from a fake api store and displays all products (url: /products)
- it also displays individual product from any product clicked from the products listing page (url: /product/{id})
- api link: https://fakestoreapi.com/docs

### search

- it search npm packages
- api: https://registry.npmjs.org/-/v1/search?text={term}
- link to the page: (url: /search/{term})
