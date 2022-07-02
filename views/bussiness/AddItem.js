import { Box, Button, Center, Divider, Image, VStack, Text, WarningOutlineIconr, KeyboardAvoidingView, ScrollView } from 'native-base'
import React from 'react'
import NBFormInput from '../../components/miscellaneous/NBFormInput'
import { Fontisto } from '@expo/vector-icons';
import NBTextarea from '../../components/miscellaneous/NBTextarea';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import NBToDolist from '../../components/miscellaneous/NBToDolist';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function AddItem() {
  const instState = [
    // {
    //   title: "Code",
    //   isCompleted: true
    // }
  ];
  const [list, setList] = React.useState(instState);

  function addToList(val) {
    console.log('AddItem :: addToList :: val :: ', val);
    setList(prevList => [val, ...prevList]);
  }

  console.log('AddItem :: list :: ', list);
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
    >
      <VStack>
        <Center>
          <Box>
            <Image size={150} borderRadius={100} source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg"
            }} alt="Alternate Text" />
          </Box>
          <Button >Upload Image</Button>
          <Divider />
          {/* <KeyboardAvoidingView w={'full'} h={{
            // base: "400px",
            // lg: "auto"
          }} behavior={Platform.OS === "ios" ? "padding" : "height"}> */}
            <Box w='full' px={2} >
              <NBFormInput
                placeholder='Item Name'
                label='Item Name'
                isRequired={true}
                leftIcon={{
                  name: 'briefcase',
                  family: Feather,
                }}
              />
              <NBFormInput
                placeholder='Cost'
                label='Cost'
                isRequired={true}
                leftIcon={{
                  name: 'rupee',
                  family: FontAwesome,
                }}
                type="number"
                keyboardType='numeric'
              />
              <NBFormInput
                placeholder='Discount'
                label='Discount'
                isRequired={true}
                leftIcon={{
                  name: 'rupee',
                  family: FontAwesome,
                }}
                type="number"
                keyboardType='numeric'
              />
              <NBToDolist
                list={list} setList={setList} handler={val => addToList(val)}
                checkboxReq={false} label='Ingrediants/sub-components of Item'
              />
              <Box >
                <NBTextarea
                  label="Bit about Item"
                  placeholder="Bit about Item"
                />

              </Box>
            </Box>
            <Button >
              <Text>Add Item</Text>
            </Button>
          {/* </KeyboardAvoidingView> */}
        </Center>
      </VStack>
    </KeyboardAwareScrollView>
  )
}
