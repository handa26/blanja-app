import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "./homepage/homepage";
import Product from "./product/product";
import AddProduct from "./post-product/post-product";
import Checkout from "./checkout/checkout";
import ProductsTable from "../components/products-table/products-table";
import UpdateProduct from "./update-product/update-product";
import Login from "./login/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Homepage} />
      <Route path='/login' component={Login} />
      <Route path='/product/:id' component={Product} />
      <Route path='/update/:id' component={UpdateProduct} />
      <Route path='/post' component={AddProduct} />
      <Route path='/stock' component={ProductsTable} />
      <Route path='/checkout' component={Checkout} />
    </BrowserRouter>
  );
}

export default Router;