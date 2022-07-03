import { Avatar, Box, Button, Center, CheckIcon, Divider, FlatList, FormControl, HStack, Icon, Image, Select, Spacer, Text, VStack, WarningOutlineIcon } from 'native-base';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import NBFormInput from './NBFormInput';
import QRCode from "react-qr-code";

const NBFlatList1 = (props) => {
  const { data } = props
  console.log('NBFlatList :: data :: ', data);

  return <Box>
    <FlatList data={data} renderItem={({
      item
    }) => (
      <Box>
        <Box py={8} w="full">
          <HStack  justifyContent={'space-around'} w='full'>
            <HStack  flex={1} justifyContent={'space-around'}>
              <Box  width={'90%'}>
                <Center>
                  <Image
                    rounded="full"
                    height={48}
                    width={48}
                    alt="Image"
                    source={{ uri: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1575' }} />
                </Center>
              </Box>
              <VStack space={2} alignItems="flex-start">
                <Text fontWeight="bold" fontSize="md" color="amber.800">About the Item</Text>
                <Text fontWeight="bold" fontSize="md" color="amber.600">{item.arg1}</Text>
                <Text fontWeight="bold" fontSize="md" color="red.500">Cost: ${item.arg2}</Text>
                <Text fontWeight="bold" fontSize="md" color="green.600">Discount: {item.arg3}</Text>
                <VStack alignSelf="flex-start">
                  {item.list.map(l => <li>{l.title}</li>)}
                </VStack>
                <Text >{item.arg4}</Text>
              </VStack>
            
            </HStack>
            <Box flex={1} alignItems="center"  justifyContent="center">
              <QRCode size={200} value={{...item}} />
            </Box>
          </HStack>
        </Box>
        <Divider />
      </Box>)} />
  </Box>;
};

export default NBFlatList1;