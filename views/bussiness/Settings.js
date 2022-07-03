import { Box, HStack, Switch, useColorMode, VStack } from 'native-base'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Settings() {
  const {
    toggleColorMode
  } = useColorMode();

  const switchHandler = (e) => {
    // console.log('Footer :: switchHandler :: e :: ', e );
    toggleColorMode()
  }

  const accountHandler = () => {

  }

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
    >
      <VStack>
        <HStack>
          <Box flex={1}>Dark Theme</Box>
          <Box><Switch onChange={switchHandler} size="sm" /></Box>
        </HStack>
        <HStack>
          <Box flex={1}>Disable Account</Box>
          <Box><Switch onChange={accountHandler} size="sm" /></Box>
        </HStack>
      </VStack>
    </KeyboardAwareScrollView>
  )
}
