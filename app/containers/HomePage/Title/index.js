import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
    };
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="container bordered centered">
          <div>
            <i className="fas fa-spinner fa-spin fa-3x" />
          </div>
        </div>
      );
    }
    return (
      <div className="container bordered centered">
        <h3>
          This is the main title
        </h3>
      </div>
    );
  }
}

Title.propTypes = {
  status: PropTypes.string,
};

export default Title;
