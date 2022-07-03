import { Box } from 'native-base'
import React, { useEffect } from 'react'
import { getAuth, signOut } from "firebase/auth";
import { log } from 'react-native-reanimated';

const auth = getAuth();

export default function Logout() {
  useEffect(() => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Logout');
    }).catch((error) => {
      // An error happened.
      console.log('Logout :: error :: ', error);
    });
  })
  return (
    <Box></Box>
  )
}
