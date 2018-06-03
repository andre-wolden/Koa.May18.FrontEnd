import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import handyman1 from '../../../images/Homepage/handyman1.jpg';
import handyman2 from '../../../images/Homepage/handyman2.jpg';
import handyman3 from '../../../images/Homepage/handyman3.jpg';

class ProductOverview extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="product-overview-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor
            </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm col-md img-fluid">
              <img src={handyman1} className="img-fluid" alt={'handyman1'} />
              <div className="product-icon-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div className="col-sm col-md img-fluid">
              <img src={handyman2} className="img-fluid" alt={'handyman2'} />
              <div className="product-icon-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div className="col-sm col-md img-fluid">
              <img src={handyman3} className="img-fluid" alt={'handyman3'} />
              <div className="product-icon-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductOverview.propTypes = {
  status: PropTypes.string,
};

export default ProductOverview;
