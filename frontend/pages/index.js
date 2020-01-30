import DroneState from '../components/DroneState';
import Commands from '../components/Commands';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Operator Mono', monospace;
    font-weight: 900;
    font-size: 1rem;
    background: #FFF;
    background-image: url('/static/bg-sky-moon.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    color: #000;
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
  flex-direction: column;
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
      <DroneState />
      <Commands />
    </PageContent>
  </PageStyles>
);

export default IndexPage;
