import React from 'react';
import PropTypes from 'prop-types';

import InvoiceItem from './invoiceItem';
import { getAllInvoices } from '../api';

// Example POST method implementation:

// postData('http://example.com/answer', {answer: 42})
//   .then(data => console.log(data)) // JSON from `response.json()` call
//   .catch(error => console.error(error))

// function postData(url, data) {
//   // Default options are marked with *
//   return fetch(url, {
//     body: JSON.stringify(data), // must match 'Content-Type' header
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, same-origin, *omit
//     headers: {
//       'user-agent': 'Mozilla/4.0 MDN Example',
//       'content-type': 'application/json'
//     },
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, cors, *same-origin
//     redirect: 'follow', // manual, *follow, error
//     referrer: 'no-referrer', // *client, no-referrer
//   })
//   .then(response => response.json()) // parses response to JSON
// }

class Invoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const status = this.props.status;
    getAllInvoices(status).then((result) => {
      this.setState({ data: result });
      this.setState({ isLoading: false });
    })
    .catch((error) => {
      console.log(error);
    });
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

    const allInvoices = this.state.data.map((invoice) => (
      <InvoiceItem key={invoice.id} invoice={invoice} />
    ));
    return <div className="container bordered centered">{allInvoices}</div>;
  }
}

Invoice.propTypes = {
  status: PropTypes.string,
};

export default Invoice;
