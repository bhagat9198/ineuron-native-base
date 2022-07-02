import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, HStack, Text } from 'native-base';
import { APP_NAME } from '../../constants/app';

export function BrandFull(props) {

  return (
    <HStack >
      <MaterialCommunityIcons name="clock-start" color="black" {...props.styleIcon}  />
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
