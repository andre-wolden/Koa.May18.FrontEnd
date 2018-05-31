import React from 'react';
import './style.css';

export default class extends React.Component {
    render() {
        return (
            <div className="container footer bordered centered">
                <button
                    type="button"
                    style={{width:'100%', maxWidth: '410px'}}
                    className="btn btn-lg btn-primary"
                    >
                    Process all invoices
                    </button>
            </div>
        );
    }
}