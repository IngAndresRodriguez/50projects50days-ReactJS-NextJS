import { ThemeOptions } from '@mui/material';
import { red } from '@mui/material/colors';
import { roboto } from '../config';

// Create a theme instance.
const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#022959',
    },
    secondary: {
      main: '#483EFF',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF'
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
};

export default lightTheme;