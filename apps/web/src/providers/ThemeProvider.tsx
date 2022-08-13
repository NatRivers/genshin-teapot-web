import { FC, ReactNode } from 'react';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import { ThemeProvider as GeapotThemeProvider } from '@geapot/web/theme';

interface Props {
  children?: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => (
  <StyledEngineProvider>
    <GeapotThemeProvider>
      <CssBaseline />
      {children}
    </GeapotThemeProvider>
  </StyledEngineProvider>
);
