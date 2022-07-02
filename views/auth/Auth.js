import { Box } from 'native-base'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Signin from './Signin';
import Signup from './Signup';

export default function Auth() {
  const [authUser, setAuthUser] = useState(false);
  return (
    <Box  >
      <Signin />
   </Box>
  )
}
