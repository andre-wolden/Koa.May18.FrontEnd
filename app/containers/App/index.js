import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import React from 'react';
import HomePage from 'containers/HomePage/Loadable';

import NotFoundPage from './NotFoundPage/Loadable';
import Header from './Header';
import Footer from './Footer';
import CornerRibbon from './CornerRibbon';
import ProductPage from '../ProductPage';

import './style.css';

export default function App() {
  return (
    <div className="appwrapper">
      <Helmet
        titleTemplate="%s - KOA"
        defaultTitle="KOA SOL"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      {/* <CornerRibbon /> */}
    </div>
  );
}
