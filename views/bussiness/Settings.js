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
      <VStack px={{ md: 48, base: 4 }} space={4} mt={4}>
        <HStack alignItems="center" justifyContent="space-between">
          <Text fontSize="md" fontWeight="semibold" color="amber.600">Dark Theme</Text>
          <Switch onChange={switchHandler} size="md" />
        </HStack>
        <Divider />
        <HStack alignItems="center" justifyContent="space-between">
          <Text fontSize="md" fontWeight="semibold" color="amber.600">Disable Account</Text>
          <Switch onChange={accountHandler} size="md" />
        </HStack>
      </VStack>
    </KeyboardAwareScrollView>
  )
}
