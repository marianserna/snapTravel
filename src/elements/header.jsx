import styled from 'styled-components';
import { colors } from './variables';

const SnapHeader = styled.header`
  height: 69px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.18);
`;

const LogoContainer = styled.div`
  width: 68.4px;
  height: 69px;
  background-color: ${colors.pumpkin};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 37.4px;
  height: 31.8px;
  object-fit: contain;
`;

const TextLogo = styled.img`
  padding-left: 14.2px;
`;

export { SnapHeader, LogoContainer, Logo, TextLogo };
