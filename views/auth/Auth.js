import { Box, ScrollView } from 'native-base'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import BussinessDrawer from '../../components/drawer/BussinessDrawer';
import CustomerDrawer from '../../components/drawer/CustomerDrawer';
import Signin from './Signin';
import Signup from './Signup';

export default function Auth() {
  const [authUser, setAuthUser] = useState(false);

  return (
      <BussinessDrawer />
  )
}
