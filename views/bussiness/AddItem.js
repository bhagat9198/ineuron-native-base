import { Box, Button, Center, Divider, Image, VStack, Text, WarningOutlineIconr, KeyboardAvoidingView, ScrollView, Input } from 'native-base'
import React, { useRef, useState } from 'react'
import NBFormInput from '../../components/miscellaneous/NBFormInput'
import { Fontisto } from '@expo/vector-icons';
import NBTextarea from '../../components/miscellaneous/NBTextarea';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import NBToDolist from '../../components/miscellaneous/NBToDolist';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/actions';
import NBSlide from '../../components/miscellaneous/NBSlide';
import * as ImagePicker from 'expo-image-picker';

export default function AddItem() {
  const instState = [
    // {
    //   title: "Code",
    //   isCompleted: true
    // }
  ];
  const [list, setList] = React.useState(instState);
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [discount, setDiscount] = useState('');
  const [aboutItem, setAboutItem] = useState('');
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  function addToList(val) {
    console.log('AddItem :: addToList :: val :: ', val);
    setList(prevList => [val, ...prevList]);
  }

  console.log('AddItem :: list :: ', list);

  const addItemHandler = async () => {
    const res = await dispatch(addItem({
      name, cost, discount, aboutItem, productFeatures: list
    }))
    console.log('AddItem :: addItemHandler :: res :: ', res);
    if (!res.status) {
      <NBSlide type='error' message={res.message} />
      return;
    }
    <NBSlide type='success' message="Signin success" />
  }

  const uploadImgHandler = () => {
    inputRef.current.click();
  }

  const fileImgChangeHandler = async (e) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setImg(e.target.files[0])
    console.log('fileImgChangeHandler :: e.target.files[0] :: ', e.target.files[0]);
    const res = URL.createObjectURL(e.target.files[0]);
    console.log('fileImgChangeHandler :: res :: ', res);
    setImgObj(res);
  
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result, '@@@');

    if (!result.cancelled) {
      setImg(result.uri);
    }
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
    >
      <VStack>
        <Center>
          <Box>
            <Image key={Math.random()} size={150} borderRadius={100} source={{
              uri: img ? img : 'https://wallpaperaccess.com/full/317501.jpg'
            }} alt="Alternate Text" />
          </Box>
          <Button onPress={pickImage}>Upload Image</Button>
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
              value={name}
              handler={e => setName(e.target.value)}
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
              value={cost}
              handler={e => setCost(e.target.value)}
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
              value={discount}
              handler={e => setDiscount(e.target.value)}
            />
            <NBToDolist
              list={list} setList={setList} handler={val => addToList(val)}
              checkboxReq={false} label='Ingrediants/sub-components of Item'
            />
            <Box >
              <NBTextarea
                label="Bit about Item"
                placeholder="Bit about Item"
                value={aboutItem}
                handler={e => setAboutItem(e.target.value)}
              />

            </Box>
          </Box>
          <Button onPress={addItemHandler}>
            <Text>Add Item</Text>
          </Button>
          {/* </KeyboardAvoidingView> */}
        </Center>
      </VStack>
    </KeyboardAwareScrollView>
  )
}
