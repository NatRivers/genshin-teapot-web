import styled from '@mui/styled-engine';
import { Typography } from '@mui/material';

import NxWelcome from './nx-welcome';
import { ThemeProvider } from './providers';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <ThemeProvider>
      <StyledApp>
        <NxWelcome title="geapot-web" />
        <Typography variant="h1">Test Header</Typography>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
