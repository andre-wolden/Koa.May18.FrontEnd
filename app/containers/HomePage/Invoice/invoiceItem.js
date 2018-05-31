import React from 'react';
import InvoiceItemInner from './InvoiceItemInner';

import './style.css';

export default class InvoiceItem extends React.Component {
  render() {
    const invoice = this.props.invoice;
    const badgeClass = invoice.status === 'controlled' ? 'badge-controlled' : 'badge-processed';
    return (
  <div style={{marginBottom: '10px'}}>
      <a data-toggle="collapse" href={`#invoice-${invoice.id}`} role="button" aria-expanded="false" aria-controls="collapseExample">
        <div className="row invoice-row">
          <div className="col-2">
            {invoice.date}
          </div>
          <div className="col-5">
            {invoice.supplier}
          </div>
          <div className="col-2">
            {invoice.value}
          </div>
          <div className={`col-3 ${badgeClass}`}>
            {invoice.status}
          </div>
        </div>
      </a>
      <InvoiceItemInner invoice={invoice} />
    </div>
    );
  }
}
