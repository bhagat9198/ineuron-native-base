import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box, useSafeArea } from "native-base";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Auth from './views/auth/Auth';

export default function App() {
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 2
  });

  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
      <Box {...safeAreaProps}>
        <Auth />
      </Box>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
