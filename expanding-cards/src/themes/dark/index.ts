import { ThemeOptions } from '@mui/material';
import { red } from '@mui/material/colors';
import { roboto } from '../config';

// Create a theme instance.
const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    background: {
      default: '#202125',
      paper: '#303135'
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
};

export default darkTheme;