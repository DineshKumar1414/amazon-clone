import React, { useEffect } from "react";
import {Routes, Route} from "react-router";
import Header from "./navbar.js";
import Checkout from "./product/Checkout.js";
import ProductDetails from "./product/Productdetails.js";

import ProductList from "./product/ProductList.js";
import SignIn from "./register-login/login.js";
import Register from "./register-login/register.js";


function AppRoute(props) {


  useEffect(() => {

  });
  return (
    <React.Fragment>
   
        <Routes>
        <Route
          path="/" index
          element={ <Register /> }
        ></Route>
         
         <Route
          path="/signin" 
          element={ <SignIn /> }
        ></Route>

        <Route
          path="/products"
          element={ <ProductList /> }
        ></Route>
        <Route path="/products/:productId"   element={   <ProductDetails /> }>
        
        </Route>
        <Route path="/checkout"   element={   <Checkout /> }>
        
        </Route>
        </Routes>
     
    </React.Fragment>
  );
}

export default AppRoute;