import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';
import SearchForm from './SearchForm';
import Sorting from './Sorting';
import SearchResults from './SearchResults';

class App extends Component {
  static propTypes = {
    searched: PropTypes.bool.isRequired
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm />
        {this.props.searched ? <Sorting /> : ''}
        {this.props.searched ? <SearchResults /> : ''}
      </div>
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
