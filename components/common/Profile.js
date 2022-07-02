import { Box, Button, Center, VStack,Image } from 'native-base'
import React, { useState } from 'react'
import NBTabView from '../miscellaneous/NBTabView'
import { TabView, SceneMap } from "react-native-tab-view";

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
  console.log('SeeProfile');
  return <Box>see</Box>
}

const EditProfile = () => {
  console.log('EditProfile');

  return <Box>EDIT</Box>
}
