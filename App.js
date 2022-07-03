import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box, useSafeArea } from "native-base";
import 'react-native-gesture-handler';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import Auth from './views/auth/Auth';
import reducer from './store/reducer';

const rootReducer = combineReducers({
  reducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <Box flex={1} safeArea>
          <Auth />
        </Box>
      </Provider>
    </NativeBaseProvider>
  );
}
