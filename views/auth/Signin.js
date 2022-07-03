import { Container, VStack, Box, Stack, Input, Icon, KeyboardAvoidingView, Text, Button, HStack } from 'native-base'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/common/Footer'
import { BrandFull } from '../../components/miscellaneous/Brand'
import NBFormInput from '../../components/miscellaneous/NBFormInput';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { async } from '@firebase/util';
import { signin } from '../../store/actions';
import { useDispatch } from 'react-redux';
import NBSlide from '../../components/miscellaneous/NBSlide';


export default function Signin(props) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { setAuthPage } = props;

 

  const iconHandler = () => {
    setShow(!show)
  }

  const signinHandler = async() => {
    const res = await dispatch(signin({
      email, password
    }))
    console.log('Signin :: signinHandler :: res :: ', res);
    if (!res.status) {
      <NBSlide type='error' message={res.message} />
      return;
    }
    <NBSlide type='success' message="Signin success" />
  }

  return (
    <VStack height='full' px={{md:48}}  space={4} >
      <Box alignItems="center" justifyContent="center" mt={10}>
        <BrandFull style={{ fontWeight: 700, fontSize: '5xl' }} styleIcon={{ size: 50 }} />
      </Box>
      <VStack flex={1} justifyContent="center">
        
        <Box px={4}>
          <Stack space={1} w="full" alignItems="center" >
            <KeyboardAvoidingView w='full'>
              <NBFormInput label="Email" placeholder="Email"
                leftIcon={{
                  name: "email",
                  family: Entypo
                }} 
                value={email}
                handler={e => setEmail(e.target.value)}
                />
              <NBFormInput label="Password"
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
              <Button
                mt={4}
                leftIcon={<AntDesign name="user" size={24} color="white" />}
                onPress={signinHandler}
                _text={{color:"white", fontSize:"md", fontWeight:"medium"}}
              >
                SignIn
              </Button>

            </KeyboardAvoidingView>
            <HStack alignItems="center" mt={4}>
              <Text>
                Be a part of our team 
              </Text>
              <Button bg='transparent' onPress={() => setAuthPage('signup')}  _text={{fontWeight:"bold" , color:"coolGray.900"}}>SignUp
              </Button>
            </HStack>

          </Stack>
        </Box>
      </VStack>
      <Box width="100%" >
        <Footer />
      </Box>
    </VStack>
  )
}
