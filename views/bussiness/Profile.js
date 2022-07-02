import { Box, Center, VStack } from 'native-base'
import React from 'react'
import CommonProfile from '../../components/common/Profile'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Profile() {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
    >
      <CommonProfile />
    </KeyboardAwareScrollView>
  )
}
