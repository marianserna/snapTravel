import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';
import SearchForm from './SearchForm';
import Sorting from './Sorting';

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
