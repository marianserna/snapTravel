import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';
import SearchForm from './SearchForm';
import Sorting from './Sorting';
import SearchResults from './SearchResults';

import { AppContainer } from '../elements/app';

class App extends Component {
  static propTypes = {
    searched: PropTypes.bool.isRequired
  };

  render() {
    return (
      <AppContainer>
        <Header />
        <SearchForm />
        {this.props.searched ? <Sorting /> : ''}
        {this.props.searched ? <SearchResults /> : ''}
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  return { searched: state.searched };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(App);
