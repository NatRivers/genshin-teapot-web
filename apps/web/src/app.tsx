import styled from '@emotion/styled';

import { ThemeProvider } from './providers';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <ThemeProvider>
      <StyledApp>
        <NxWelcome title="geapot-web" />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
