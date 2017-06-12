import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from '../pages/home/Home'
import REST from '../pages/rest/REST'
import Snippets from '../pages/snippets/Snippets'
import FAQ from '../pages/faq/FAQ'

import SnippetsListing from '../compontents/snippetComponents/SnippetsListing/SnippetsListing'
import RestaurantMenu from '../pagesSnippets/RestaurantMenu/RestaurantMenu'

const Main = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/rest" component={REST}/>
      <Route exact path="/snippets" component={Snippets}/>
      <Route exact path="/FAQ" component={FAQ}/>
      <Route exact path="/snippet-listing" component={SnippetsListing}/>
      <Route path="/restaurant-menu" component={RestaurantMenu}/>
    </div>
  </Router>
);

export default Main;
