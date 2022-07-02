import { Box } from 'native-base'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import CustomerDrawer from '../../components/Drawer/CustomerDrawer';
import Signin from './Signin';
import Signup from './Signup';

export default function Auth() {
  const [authUser, setAuthUser] = useState(false);

  return (
      <CustomerDrawer />
  )
}
