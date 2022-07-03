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
    <HStack  alignItems="center" justifyContent="space-between" px={{base:3}} bg="green.300" py={3} rounded="lg"  mb={2} >
      <HStack space={2} alignItems="center">
        <AntDesign name="copyright" size={24} color="black" />
        <Text fontSize="md" fontWeight="medium">2022</Text>
      </HStack>
      <Switch onChange={switchHandler} size="sm" />
    </HStack>
  )
}
