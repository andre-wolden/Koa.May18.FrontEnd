import React from 'react';

import './style.css';

export default class InvoiceItemInner extends React.Component {
  render() {
    const invoice = this.props.invoice;
    return (
      <div className="panel-collapse collapse invoice-inner" id={`invoice-${invoice.id}`}>
        <div className="card card-body container">
          <div className="row">
            <div className="col">
                            Remarks:
                        </div>
          </div>
          <div className="row">
            <div className="col">
              {invoice.remarks}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
