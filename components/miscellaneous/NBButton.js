import { Button, Text } from 'native-base'
import React from 'react'

export default function NBButton(props) {
  const {btnProps, style} = props;
  return (
    <Button small primary>
      <Text>Default Small</Text>
    </Button>
  )
}
