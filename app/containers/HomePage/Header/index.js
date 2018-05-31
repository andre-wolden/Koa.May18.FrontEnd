import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import './style.css';

class Header extends React.Component {
    render() {
        return(
        <div className="container bordered header centered">
            <h1>
                Invoice Handler
            </h1>
        </div>
        );
    }
}

export default Header;