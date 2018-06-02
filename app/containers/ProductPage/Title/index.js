import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Title extends React.Component {
  render() {
    return (
      <div className="title">
        <div className="container">
          <div className="row">
            <div className="col">
                This is the productpage
              </div>
          </div>
        </div>
      </div>
    );
  }
}

Title.propTypes = {
  status: PropTypes.string,
};

export default Title;
