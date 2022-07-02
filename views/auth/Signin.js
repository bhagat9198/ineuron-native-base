import { Container, VStack, Box, Stack, Input, Icon, KeyboardAvoidingView, Text, Button, HStack } from 'native-base'
import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import { BrandFull } from '../../components/miscellaneous/Brand'
import NBFormInput from '../../components/miscellaneous/NBFormInput';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Signin() {
  const [show, setShow] = useState(false);

  const iconHandler = () => {
    setShow(!show)
  }

  
  return (
    <VStack height='full'  >
      <VStack flex={1}>
        <Box>
          <BrandFull style={{ fontWeight: 700, fontSize: '5xl' }} styleIcon={{ size: 50 }} />
        </Box>
        <Box px={4}>
          <Stack space={1} w="full" alignItems="center" >
            <KeyboardAvoidingView w='full'>
              <NBFormInput label="Email" placeholder="Email"
                leftIcon={{
                  name: "email",
                  family: Entypo
                }} />
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
              />
              <Button
                leftIcon={<AntDesign name="user" size={24} color="black" />}
              >
                <Text>SignIn</Text> 
              </Button>

            </KeyboardAvoidingView>
            <HStack>
              <Text>
                Be a part of our team 
              </Text>
              <Button bg='transparent' >
                <Text fontWeight={900}>SignUp</Text>
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
