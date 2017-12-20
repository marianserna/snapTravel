import styled from 'styled-components';
import { colors, padding, margin, fontSizes } from './variables';

const SortingButtons = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: ${padding.section};
`;

const Filter = styled.button`
  width: calc(33.33% - 14.7px);
  height: 46px;
  font-size: ${fontSizes.filter};
  color: ${colors.filter};
  font-weight: bold;
  text-align: left;
  padding-left: ${padding.filter};
  border: none;
  border-radius: 3px;
`;

const ActiveFilter = styled(Filter)`
  position: relative;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
`;

const InactiveFilter = styled(Filter)`
  background-color: ${colors.filterInactive};
`;

const Line = styled.div`
  height: 2px;
  border-radius: 1px;
  background-color: ${colors.pumpkin};
  position: absolute;
  right: 23px;
`;

const BigLine = styled(Line)`
  width: 16px;
  top: 15px;
`;

const MediumLine = styled(Line)`
  width: 11px;
  top: 19px;
`;

const SmallLine = styled(Line)`
  width: 7px;
  top: 23px;
`;

const Arrow = styled.img`
  position: absolute;
  right: 11px;
  top: 20px;
  height: 15px;
  width: 12px;
  transform: scale(1.5, 2);
`;

export {
  SortingButtons,
  ActiveFilter,
  InactiveFilter,
  BigLine,
  MediumLine,
  SmallLine,
  Arrow
};
