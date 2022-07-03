import { Avatar, Box, Button, Center, CheckIcon, Divider, FlatList, FormControl, HStack, Icon, Image, Select, Spacer, Text, VStack, WarningOutlineIcon } from 'native-base';
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import NBFormInput from './NBFormInput';
import QRCode from "react-qr-code";

const NBFlatList2 = (props) => {
  const { data, handler } = props
  console.log('NBFlatList :: data :: ', data);

  const [duration, setDuration] = useState({
    time: 0,
    type: null
  })

  const initPayment = ({ item }) => {
    // console.log('NBFlatList2 :: initPayment :: item :: ', item);
    handler({ ...item, duration });
  }

  return <Box>
    <FlatList data={data} renderItem={({
      item
    }) => (
      <Box>
        <Box py={8} w="full">
          <HStack alignItems="center" justifyContent="space-between" width="80%" mx="auto">
              <Center>
                <Image
                  rounded="full"
                  height={48}
                  width={48}
                  alt="Image"
                  source={{ uri: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1575' }} />
              </Center>
              <VStack space={2} alignItems="flex-start">
                <Text fontWeight="bold" fontSize="md" color="amber.800">About the Item</Text>
              <Text fontWeight="bold" fontSize="md" color="amber.600">{item.arg1}</Text>
              <Text fontWeight="bold" fontSize="md" color="red.500">Cost: ${item.arg2}</Text>
              <Text fontWeight="bold" fontSize="md" color="green.600">Discount: {item.arg3}</Text>
              <VStack alignSelf="flex-start"> 
                {item.list.map(l => <Text>{l.title}</Text>)}
              </VStack>
                <Text >{item.arg4}</Text>
              </VStack>
            {item.canOrder && <Box>
              <VStack>
                <Text fontWeight="bold" fontSize="md" color="amber.800">Order your Item</Text>
                <VStack>
                  <NBFormInput
                    label='Start cooking after'
                    isRequired={true}
                    keyboardType='numeric'
                    type='number'
                    leftIcon={{
                      name: 'clockcircleo',
                      family: AntDesign
                    }}
                    value={duration.time}
                    handler={e => setDuration(prev => ({ ...prev, time: e.target.value }))}
                  />
                  <FormControl >
                    <FormControl.Label></FormControl.Label>
                    <Select accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                      bg: "teal.600",
                      endIcon: <CheckIcon size={5}
                      />
                    }}
                      onValueChange={itemValue => {
                        setDuration(prev => ({ ...prev, type: itemValue }))
                      }}
                      selectedValue={duration.type}
                    >
                      <Select.Item label="hours" value="hours" />
                      <Select.Item label="minutes" value="minutes" />
                    </Select>
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                      <Text> Please make a selection!</Text>
                    </FormControl.ErrorMessage>
                  </FormControl>

                </VStack>
                <Button mt={5} onPress={() => initPayment({item})} >Pay and Order</Button>
              </VStack>
            </Box>}
          </HStack>
        </Box>
        <Divider />
      </Box>)} />
  </Box>;
};

export default NBFlatList2;