import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, HStack, Text,Icon } from 'native-base';
import { APP_NAME } from '../../constants/app';

export function BrandFull(props) {

  return (
    <HStack  space={4} alignItems="center" >
      <MaterialCommunityIcons name="clock-start" color="red.500"  size={40}  />
      <Text {...props.style}>{APP_NAME}</Text>
    </HStack>
  )
}

export function Brand(props) {
  return (
    <Box {...props.style}>
      <MaterialCommunityIcons name="clock-start" size={24} color="black" />
    </Box>
  )
}
