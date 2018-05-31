/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getHomePageTitle } from './constants';

import './style.css';
import Header from './Header';
import MainInput from './MainInput';
import Invoice from './Invoice';
import InvoiceHeader from './Invoice/invoiceHeader';
import InfoDisplay from './InfoDisplay';
import CornerRibbon from './CornerRibbon';
import Footer from './Footer';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.updateData = this.updateData.bind(this);
  }

  updateData() {
    this.child.getData();
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>{getHomePageTitle()}</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <Header />
        <InfoDisplay />
        <MainInput updateData={this.updateData} />
        <InvoiceHeader />
        <Invoice ref={(instance) => { this.child = instance; }} status="controlled" />
        <Invoice status="processed" />
        <Footer />
        <CornerRibbon />
      </article>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
