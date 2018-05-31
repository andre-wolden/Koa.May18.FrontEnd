import React from 'react';

export default class InvoiceHeader extends React.Component {
    render() {
        return(
            <div className="container bordered centered">
                <div className="row invoice-header">
                    <div className="col-2">
                        Dato
                    </div>
                    <div className="col-5">
                        Supplier
                    </div>
                    <div className="col-2">
                        Amount
                    </div>
                    <div className="col-3">
                        Status
                    </div>
                </div>
            </div>
        );
    }
}