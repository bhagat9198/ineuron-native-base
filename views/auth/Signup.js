import { Container, VStack, Box, Stack, Input, Icon, KeyboardAvoidingView, Text, Button, HStack } from 'native-base'
import React, { useState } from 'react'
import Footer from '../../components/common/Footer'
import { BrandFull } from '../../components/miscellaneous/Brand'
import NBFormInput from '../../components/miscellaneous/NBFormInput';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import NBRadio from '../../components/miscellaneous/NBRadio';
import { useDispatch } from 'react-redux';
import { signup } from '../../store/actions';
import NBSlide from '../../components/miscellaneous/NBSlide';

export default function Signup(props) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { setAuthPage } = props;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const iconHandler = () => {
    setShow(!show)
  }

  const signupHandler = async() => {
    const res = await dispatch(signup({
      fullName, email, password, userType, phoneNum
    }))
    console.log('Signup :: signupSubmit :: res :: ', res);
    if(!res.status) {
      <NBSlide type='error' message={res.message} />
      return;
    }
    <NBSlide type='success' message="Signup success" />
  }

  return (
    <VStack height='full' px={{md:40}} space={2} >
      <VStack flex={1}>
        <Box justifyContent="center" alignItems="center">
          <BrandFull style={{ fontWeight: 700, fontSize: '5xl' }} styleIcon={{ size: 50 }} />
        </Box>
        <Box px={4}>
          <Stack space={1} w="full" alignItems="center" >
            <KeyboardAvoidingView w='full'>
              <NBFormInput 
              label="Full Name" placeholder="Full Name" isRequired={true}
                leftIcon={{
                  name: "person",
                  
                  family: MaterialIcons
                }}
                value={fullName}
                handler={e => setFullName(e.target.value)}
                />
              <NBFormInput label="Email" placeholder="Email" isRequired={true}
                leftIcon={{
                  name: "email",
                  family: Entypo
                }} 
                value={email}
                handler={e => setEmail(e.target.value)}
                />
              <NBFormInput label="Phone/Mobile Number" placeholder="Phone" isRequired={true}
                type='number'
                keyboardType="numeric"
                leftIcon={{
                  name: "phone",
                  family: Feather
                }} 
                value={phoneNum}
                handler={e => setPhoneNum(e.target.value)}
                />
              <NBFormInput label="Password" isRequired={true}
                leftIcon={{
                  family: MaterialCommunityIcons,
                  name: "form-textbox-password"
                }}
                rightIcon={{
                  name: show ? "visibility" : "visibility-off",
                  family: MaterialIcons,
                  handler: iconHandler
                }}
                placeholder="Password" type={show ? "text" : "password"}
                value={password}
                handler={e => setPassword(e.target.value)}
              />
              <NBRadio 
                label='You preffer using the app as : ' isRequired={true}
                radiolist={[{ label: 'Customer', value: 'Customer' }, { label: 'Bussiness', value: 'Bussiness' }]}
                value={userType}
                handler={val => {
                  console.log('signup :: radio handler :: val :: ', val);
                  setUserType(val)}}
              />
              <Button
                leftIcon={<AntDesign name="adduser" size={24} color="black" />}
                onPress={signupHandler}
              >
                Signup
              </Button>

            </KeyboardAvoidingView>
            <HStack alignItems="center">
              <Text>
                Already have an account?
              </Text>
              <Button bg='transparent' onPress={() => setAuthPage('signin')}  _text={{color:"coolGray.800", fontWeight:"bold"}}>SignIn
              </Button>
            </HStack>
          </Stack>
        </Box>
      </VStack>
      <Box >
        <Footer />
      </Box>
    </VStack>
  )
}
