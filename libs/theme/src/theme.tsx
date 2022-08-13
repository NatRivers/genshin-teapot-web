import { FC, ReactNode } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';

/**
 * See these links for information on ways of using `theme`:
 * - https://mui.com/system/styles/advanced/#accessing-the-theme-in-a-component
 * - https://mui.com/material-ui/customization/theming/#nesting-the-theme
 * - https://mui.com/material-ui/customization/how-to-customize/#2-reusable-component
 */
const theme = createTheme({
  palette: {
    /** palette theme config here */
  },
  spacing: 8,
  shape: { borderRadius: 4 },
  components: {
    /** components theme config here */
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    allVariants: {
      fontFamily: '"Roboto", sans-serif',
    },
  },
});

export interface ThemeProviderProps {
  children?: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);
