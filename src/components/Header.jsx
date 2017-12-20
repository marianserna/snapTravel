import React from 'react';

import { SnapHeader, LogoContainer, Logo, TextLogo } from '../elements/header';

export default class Header extends React.Component {
  render() {
    return (
      <SnapHeader>
        <LogoContainer>
          <Logo
            alt="logo"
            src="https://cdn.getsnaptravel.com/header-logo.png"
            srcset="https://cdn.getsnaptravel.com/header-logo@2x.png 2x, https://cdn.getsnaptravel.com/header-logo@3x.png 3x"
          />
        </LogoContainer>
        <div>
          <TextLogo
            alt="SnapTravel Title"
            src="https://cdn.getsnaptravel.com/SnapTravel-text.png"
            srcset="https://cdn.getsnaptravel.com/SnapTravel-text@2x.png 2x, https://cdn.getsnaptravel.com/SnapTravel-text@3x.png 3x"
          />
        </div>
      </SnapHeader>
    );
  }
}
