import styled from 'styled-components';
import { colors, padding, margin, fontSizes } from './variables';

const FormContainer = styled.section`
  padding-top: ${padding.section};
`;

const Input = styled.input`
  height: 43px;
  font-size: ${fontSizes.input};
  font-weight: 600;
  color: ${colors.input};
  margin-right: ${margin.section};
  border: none;
  border-radius: 5px;
  padding-left: ${padding.input};
  box-shadow: 0 0 4px 0 #c4c4c4;

  @media (max-width: 810px) {
    display: block;
    margin: 0 auto;
    width: 100%;
    margin-bottom: 8px;
  }
`;

const Button = styled.button`
  width: 46px;
  height: 43px;
  border: none;
  border-radius: 5px;
  transform: translateY(4px);
  box-shadow: 0 0 4px 0 #bbbbbb;

  @media (max-width: 810px) {
    display: block;
    width: 20%;
  }
`;

const SearchImg = styled.img`
  width: 21px;
  height: 21px;
`;

export { FormContainer, Input, Button, SearchImg };
