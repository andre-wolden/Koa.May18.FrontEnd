import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import graph from '../../../images/Homepage/graph.png';

class ProcessOverview extends React.Component {
  render() {
    return (
      <div className="container process-overview">
        <div className="row">
          <div className="col-sm">
            <div className="process-overview-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="process-overview-list">
              <ul>
                <li>Lorem ipsum adipiscing elit</li>
                <li>Dolor sit Lorem ipsum dolor sit amet</li>
                <li>Sit Lorem ipsum dolor sit amet amet</li>
                <li>Lorem ipsum dolor sit amet Adipiscing</li>
              </ul>
            </div>
            <div>
              <button
                type="button"
                style={{ width: '100%', maxWidth: '410px' }}
                className="btn btn-lg btn-info"
              >
              Lorem ipsum
              </button>
            </div>
          </div>
          <div className="col-sm">
            <img src={graph} id="process-overview-graph" className="img-fluid" alt={'handyman1'} />
          </div>
        </div>
      </div>
    );
  }
}

ProcessOverview.propTypes = {
  status: PropTypes.string,
};

export default ProcessOverview;
