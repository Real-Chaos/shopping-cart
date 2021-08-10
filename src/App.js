import React from 'react'
import Nav from './Components/UI/Nav'
import HomePage from './Components/UI/HomeContent'
import {Products} from './Components/UI/Products/Products'
import Shirts from './Components/UI/Products/Shirts'
import Pants from './Components/UI/Products/Pants'
import Suits from './Components/UI/Products/Suits'
import Toys from './Components/UI/Products/Toys'

import ShirtDetails from './Components/UI/Product Details/ShirtDetails'
import { Switch, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
function App() {
  const location = useLocation()
  return (
    <>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
        <Route exact path="/shopping-cart">
              <HomePage />
          </Route>
          <Route exact path="/products">
              <Products />
          </Route>
          <Route exact path="/products/shirts">
              <Shirts />
          </Route>
          <Route exact path="/products/pants">
              <Pants />
          </Route>
          <Route exact path="/products/suits">
              <Suits />
          </Route>
          <Route exact path="/products/toys">
              <Toys />
          </Route>
          <Route path="/shirts/:id" component={ShirtDetails} />
        </Switch>
      </AnimatePresence>
    </>

  );
}

export default App;
