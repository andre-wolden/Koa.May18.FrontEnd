import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Overlay extends React.Component {
  render() {
    return (
      <div className="container container-overlay">
        <div className="row">
          <div className="col">
            <div className="overlay">
              <div className="overlay-header">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              <div className="overlay-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Overlay.propTypes = {
  status: PropTypes.string,
};

export default Overlay;
