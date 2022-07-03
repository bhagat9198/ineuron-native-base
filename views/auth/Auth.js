import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { Box, ScrollView } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import BussinessDrawer from '../../components/drawer/BussinessDrawer';
import CustomerDrawer from '../../components/drawer/CustomerDrawer';
import NBSlide from '../../components/miscellaneous/NBSlide';
import { getUserInfo, logoutUser } from '../../store/actions';
import Signin from './Signin';
import Signup from './Signup';
const auth = getAuth();


export default function Auth() {
  const [authPage, setAuthPage] = useState('signin');
  const dispatch = useDispatch();
  const storeData = useSelector(state => state.reducer);
  console.log('Auth :: storeData :: ', storeData);
  useEffect(() => {
    const sub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('actions :: onAuthStateChanged :: user :: ', user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setTimeout(async() => {
          const uid = user.uid;
          const res = await dispatch(getUserInfo({ uid }))
          console.log('Auth :: res :: ', res);
          if (!res.status) {
            <NBSlide type='error' message={res.message} />
            return;
          }
          <NBSlide type='success' message="Signin success" />
        }, 2000)

      } else {
        // User is signed out
        setTimeout(async () => {
          const res = await dispatch(logoutUser())
          console.log('Auth :: res :: ', res);
          if (!res.status) {
            <NBSlide type='error' message={res.message} />
            return;
          }
          <NBSlide type='success' message="Signin success" />
        }, 2000)
      }
    });

    return () => sub()
  }, [])

  // if (storeData.auth && storeData.userData.userType === 'Bussiness') {
  //   return <BussinessDrawer />
  // } else if (storeData.auth && storeData.userData.userType === 'Customer') {
  //   return <CustomerDrawer />
  // } else if (authPage === 'signin') {
  //   return <Signin setAuthPage={setAuthPage} />
  // } else {
  //   return <Signup setAuthPage={setAuthPage} />
  // }

  return <CustomerDrawer />
}
