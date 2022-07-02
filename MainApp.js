import { Box, useSafeArea } from 'native-base';
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Auth from './views/auth/Auth';

export default function MainApp() {
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 2,
    pl: 2
  });

  return (
    <SafeAreaProvider>
      <Box {...safeAreaProps}>
        <Auth />
      </Box>
    </SafeAreaProvider>
  )
}
