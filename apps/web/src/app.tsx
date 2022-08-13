import styled from '@mui/styled-engine';
import { Typography } from '@mui/material';

import NxWelcome from './nx-welcome';
import { ThemeProvider } from './providers';

const StyledApp = styled('div')`
  // Your style here
`;

export function App() {
  return (
    <ThemeProvider>
      <StyledApp>
        <Typography variant="h2" color="primary.main" align="center" p={2}>
          Header with theming
        </Typography>
        <NxWelcome title="geapot-web" />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
