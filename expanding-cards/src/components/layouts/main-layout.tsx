import * as React from 'react';
import Box from '@mui/material/Box';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      {children}
    </Box>
  )
}