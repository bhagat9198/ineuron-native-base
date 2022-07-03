import { Avatar, Box, Divider, FlatList, HStack, Icon, Spacer, Text, VStack } from 'native-base';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const NBFlatList = (props) => {
  const { data } = props
  console.log('NBFlatList :: data :: ', data);

  return <Box>
    <FlatList data={data} renderItem={({
      item
    }) => <Box borderBottomWidth="1" key={Math.random()} _dark={{
      borderColor: "gray.600"
    }} borderColor="coolGray.200" pl="4" pr="5" py="2">
        <HStack space={3} justifyContent="space-between">
          <Avatar size="48px" source={{
            uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.sharechat.com%2F159deb05_1628684041387.jpeg&imgrefurl=https%3A%2F%2Fmojapp.in%2F%40kannada_food_lovers&tbnid=ZWBOrig6ZdlnLM&vet=12ahUKEwiumeW_vdv4AhXpNbcAHfTYAN4QMygAegUIARC6AQ..i&docid=6XJnMf1WH1BtRM&w=509&h=339&q=food&ved=2ahUKEwiumeW_vdv4AhXpNbcAHfTYAN4QMygAegUIARC6AQ'
          }} />
          <VStack>
            <Text _dark={{
              color: "warmGray.50"
            }} color="coolGray.800" bold>
              {item.arg1}
            </Text>
            <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
              Cost : {item.arg2}
            </Text>
            <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
              Discount : {item.arg2}
            </Text>
            <Divider />
            <Text>Highlight of Item:-</Text>
            <VStack >
              {item?.list?.map(l => <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                {l.title}
              </Text>)}
            </VStack>
          </VStack>
          <Spacer />
          {item.delete && <Icon as={<AntDesign name='delete' />} />}
          {item.checkmark && <Icon as={<Ionicons name='checkmark-done' />} />}
        </HStack>
      </Box>} keyExtractor={item => item.id} />
  </Box>;
};

export default NBFlatList;