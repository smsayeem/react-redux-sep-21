import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from './components/Layout/';
import { Products } from './components/view/Products';
import { Product } from './components/view/Product';

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
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
