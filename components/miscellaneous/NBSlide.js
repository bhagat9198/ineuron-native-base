import { Slide } from 'native-base'
import React from 'react'
import { Alert } from 'react-native'

export default function NBSlide({props}) {
  const {type, message} = props
  return (
    <Slide in={isOpenTop} placement="top">
      <Alert justifyContent="center" status={type}>
        <Alert.Icon />
        <Text color={`${type}.600`} fontWeight="medium">
          {message}
        </Text>
      </Alert>
    </Slide>
  )
}
