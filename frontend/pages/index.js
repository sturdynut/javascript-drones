import DroneState from '../components/DroneState';
import Commands from '../components/Commands';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    font-family: 'Operator Mono', monospace;
    font-weight: 900;
    font-size: 1rem;
    background: #2C3A47;
    color: white;
    margin: 0;
    padding: 0;
  }
  * {
    font-family: 'Operator Mono', monospace;
    box-sizing: border-box;
  }
`;

const PageStyles = styled.div`
  margin: 0 auto;
  height: 100vh;
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  height: 100%;

  > div {
    flex: 1;
  }
`;

const IndexPage = () => (
  <PageStyles>
    <GlobalStyle />
    <PageContent>
      <Commands />
      <DroneState />
    </PageContent>
  </PageStyles>
);

export default IndexPage;
