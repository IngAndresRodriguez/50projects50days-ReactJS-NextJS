import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { UiContext } from './';
import { getDesignTokens } from '@/utils';

export default function UiProvider({ children }: { children: React.ReactNode }) {

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const value = React.useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <UiContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </UiContext.Provider>
  )
}