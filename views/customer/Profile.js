import { Box, Text } from 'native-base'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CommonProfile from '../../components/common/Profile'
export default function Profile() {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
    >
      <CommonProfile />
    </KeyboardAwareScrollView>
  )
}
