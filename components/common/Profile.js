import { Box, Button, Center, VStack, Image } from 'native-base'
import React, { useState } from 'react'
import NBTabView from '../miscellaneous/NBTabView'
import { TabView, SceneMap } from "react-native-tab-view";
import NBFormInput from '../miscellaneous/NBFormInput';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import NBRadio from '../miscellaneous/NBRadio';

export default function Profile() {
  const [index, setIndex] = useState(0);

  return (
    <Box >
      <Center h="full" >
        <Box>
          <Box>
            <Image size={150} borderRadius={100} source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg"
            }} alt="Alternate Text" />
          </Box>
          <Button>
            Update Image
          </Button>
        </Box>
        <Box w="full" flex={1} >
          <NBTabView
            index={index} setIndex={setIndex} routes={[
              { key: 'first', title: 'Your Info' },
              { key: 'second', title: 'Edit Your Info' },
            ]}
            renderScene={
              SceneMap({
                first: SeeProfile,
                second: EditProfile
              })
            }
          />

        </Box>
      </Center>

    </Box>
  )
}

const SeeProfile = () => {
  const reducerData = useSelector(state => state.reducer);
  console.log('SeeProfile :: reducerData :: ', reducerData);
  return (
    <Box>
      <NBFormInput
        label="Full Name" placeholder="Full Name" isDisabled={true}
        leftIcon={{
          name: "person",
          family: MaterialIcons
        }}
        value={reducerData.userData.fullName}
      />
      <NBFormInput
        label="Email" placeholder="Email" isDisabled={true}
        leftIcon={{
          name: "email",
          family: Entypo
        }}
        value={reducerData.userData.email}
      />
      <NBFormInput
        label="Phone/Mobile Number" placeholder="Phone" isDisabled={true}
        type='number'
        keyboardType="numeric"
        leftIcon={{
          name: "phone",
          family: Feather
        }}
        value={reducerData.userData.phoneNum}
      />
      <NBRadio
        label='You preffer using the app as : ' isDisabled={true}
        radiolist={[{ label: 'Customer', value: 'Customer' }, { label: 'Bussiness', value: 'Bussiness' }]}
        value={reducerData.userData.userType}
      />
    </Box>
  )
}

const EditProfile = () => {
  const reducerData = useSelector(state => state.reducer);

  return <Box>
    <NBFormInput
      label="Full Name" placeholder="Full Name"
      leftIcon={{
        name: "person",
        family: MaterialIcons
      }}
      value={reducerData.userData.fullName}
    />
    <NBFormInput
      label="Email" placeholder="Email"
      leftIcon={{
        name: "email",
        family: Entypo
      }}
      value={reducerData.userData.email}
    />
    <NBFormInput
      label="Phone/Mobile Number" placeholder="Phone"
      type='number'
      keyboardType="numeric"
      leftIcon={{
        name: "phone",
        family: Feather
      }}
      value={reducerData.userData.phoneNum}
    />
    <NBRadio
      label='You preffer using the app as : '
      radiolist={[{ label: 'Customer', value: 'Customer' }, { label: 'Bussiness', value: 'Bussiness' }]}
      value={reducerData.userData.userType}
    />
    <Button>Update</Button>
  </Box>
}
