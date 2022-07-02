import { Box, Button, Center, Divider, Image, VStack, Text, ScrollView, KeyboardAvoidingView } from 'native-base'
import React from 'react'
import NBFormInput from '../../components/miscellaneous/NBFormInput'
import { Fontisto } from '@expo/vector-icons';
import NBTextarea from '../../components/miscellaneous/NBTextarea';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function AddBussiness() {
  return (
    <KeyboardAwareScrollView
     enableOnAndroid={true}
    >
      <VStack h='full' bg={'amber.500'} >
        <Center w='full' >
          <Box mb={5}>
            <Box >
              <Image size={150} borderRadius={100} source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg"
              }} alt="Alternate Text" />
            </Box>
            <Button my={5} >Upload Image</Button>
          </Box>
          <Divider />
          
            <Box w='full' px={2} >
              <NBFormInput
                placeholder='Bussiness Name'
                label='Bussiness Name'
                isRequired={true}
                leftIcon={{
                  name: 'shopping-store',
                  family: Fontisto,
                }}
              />
              <NBFormInput
                placeholder='Bussiness Location'
                label='Bussiness Address'
                isRequired={true}
                leftIcon={{
                  name: 'location',
                  family: EvilIcons,
                }}
              />
              <NBFormInput
                placeholder='Contact Number'
                label='Contact Number'
                isRequired={true}
                leftIcon={{
                  name: 'phone',
                  family: Feather,
                }}
                type="number"
                keyboardType='numeric'
              />
              <NBTextarea
                label="Message for your customers"
                placeholder="Message for your customers"
              />
            </Box>
            <Button w='full' >
              <Text>Register</Text>
            </Button>
          {/* </KeyboardAvoidingView> */}
        </Center>
      </VStack>
    </KeyboardAwareScrollView>
  )
}
