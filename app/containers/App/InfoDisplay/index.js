import React from 'react';

import './style.css';

export default class InfoDisplay extends React.Component {
    render() {
        return (
            <div id="infodisplay" className="alert alert-danger alert-dismissible infodisplay-hidden fade show" role="alert">
                All fields need to be populated!
            </div>
        );
    }
}