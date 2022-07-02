import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box, useSafeArea } from "native-base";
import MainApp from './MainApp';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Auth from './views/auth/Auth';

export default function App() {
 

  return (
    <NativeBaseProvider>
      <MainApp />
    </NativeBaseProvider>
  );
}
