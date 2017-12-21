import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Main = styled.main`
  margin-left: 90px;
  margin-right: 90px;

  @media (max-width: 810px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export { AppContainer, Main };
