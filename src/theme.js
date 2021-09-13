import { createMuiTheme } from '@material-ui/core';
import { grey, yellow, purple } from '@material-ui/core/colors';

export const lightTheme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    type: 'dark',
    primary: {
      main: purple[900],
    },
    secondary: {
      main: yellow[800],
    },
  },
});

export const darkTheme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    type: 'dark',
    primary: {
      main: grey[900],
    },
    secondary: {
      main: yellow[800],
    },
  },
});
