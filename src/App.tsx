import styled from 'styled-components'
import { GlobalStyle } from "./styles/global";

const Title = styled.h1`
  color: #8257e6;
  font-size: 64px;
`

export function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Title>Hello world</Title>
    </div>
  );
}