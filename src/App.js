import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from './components/Layout/';

import { Products } from './components/view/Products';
import { Product } from './components/view/Product';
import { Search } from './components//view/Search';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/product/:id">
            <Product />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
