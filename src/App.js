import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import { ProductList } from './views/ProductList';
import {ProductDetail} from './views/ProductDetail';
import { Cart } from './views/Cart';
import {Store} from './store/index';
import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <div className='appHeader'> 
        <h1 ><p className='capitalize'>Amazing</p><span> </span><p className='capitalize'>Store</p></h1>
      </div>    

      <div className="container">                         
        <BrowserRouter>
          <Route exact path='/' component={ProductList}></Route>
          <Route path='/product/:id' component={ProductDetail}></Route>
          <Route path='/cart' component={Cart}></Route>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
export default App;
