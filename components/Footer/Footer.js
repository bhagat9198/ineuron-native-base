import { Box, HStack, Switch, Text, useColorMode } from 'native-base'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Footer() {
  const {
    toggleColorMode
  } = useColorMode();

  const switchHandler = (e) => {
    // console.log('Footer :: switchHandler :: e :: ', e );
    toggleColorMode()
  }


  return (
    <HStack>
      <HStack flex={1}>
        <AntDesign name="copyright" size={24} color="black" />
        <Text>2022</Text>
      </HStack>
      <Switch onChange={switchHandler} size="sm" />
    </HStack>
  )
}
