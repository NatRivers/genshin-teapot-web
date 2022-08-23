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
    primary: {
      main: '#393737',
      dark: '#000000',
      light: '#C6A378',
      contrastText: '#FFC800',
    },
    secondary: {
      main: '#FFC800',
    },
  },
  spacing: 8,
  shape: { borderRadius: 4 },
  components: {
    /** components theme config here */
  },
  typography: {
    fontFamily: 'Papyrus, serif',
    fontWeightBold: 700,
    h1: {
      fontFamily: 'Papyrus, serif',
      fontSize: '42px', //3vw
      fontStyle: 'bold',
      color: '#FFC800',
      margin: 'auto',
      width: '100%',
      marginTop: '30px',
      position: 'absolute',
    },
    h5: {
      //Desc Header
      fontFamily: 'Papyrus, serif',
      fontWeight: 'bold',
      color: '#FFC800',
      fontSize: '23px',
      textAlign: 'justify',
    },
    h6: {
      //Desc Info
      fontFamily: 'Papyrus, serif',
      color: '#FFC800',
      textAlign: 'justify',
    },

    caption: {
      fontFamily: 'Papyrus, serif',
      color: '#FFFFFF',
      textAlign: 'center',
    },
  },
});

export interface ThemeProviderProps {
  children?: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);
