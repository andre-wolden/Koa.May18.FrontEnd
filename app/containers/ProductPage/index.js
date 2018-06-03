import React from 'react';
import InfoDisplay from '../App/InfoDisplay';
import Title from './Title';

import './style.css';

export default class ProductPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <InfoDisplay />
        <Title />
      </div>
    );
  }
  }

