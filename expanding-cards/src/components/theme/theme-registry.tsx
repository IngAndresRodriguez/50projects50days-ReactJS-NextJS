'use client';

import * as React from 'react';
import { NextAppDirEmotionCacheProvider } from '..';
import { UiProvider } from '@/contexts';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <UiProvider>
        {children}
      </UiProvider>
    </NextAppDirEmotionCacheProvider>
  );
}