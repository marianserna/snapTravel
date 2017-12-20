import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <img src="/images/header-logo.png" alt="logo" />
        </div>
        <h1>SnapTravel</h1>
      </header>
    );
  }
}
