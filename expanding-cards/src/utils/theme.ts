import { PaletteMode } from '@mui/material';
import { lightTheme, darkTheme } from '@/themes';

export function getDesignTokens(mode: PaletteMode) {
  return {
    ...(mode === 'light' ? lightTheme : darkTheme),
  };
}