import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
} from "native-base";
import { customerDrawer } from "../../constants/navigations";
import Home from "../../views/customer/Home";
import AllOrders from "../../views/customer/AllOrders";
import { View } from "react-native";

const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} >
      <VStack space="6" my="2" mx="1">
        <Box px="4">
          <Text bold color="gray.700">
            Mail
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
            john_doe@gmail.com
          </Text>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">

            <Pressable
              px="5"
              py="3"
              rounded="md"
              onPress={(event) => {
                props.navigation.navigate(customerDrawer.homeDrawer);
              }}
            >
              <HStack space="7" alignItems="center">
                <Icon

                  size="5"
                  as={<MaterialCommunityIcons name='form-textbox-password' />}
                />
                <Text
                  fontWeight="500"
                >
                  <Text>Home</Text>
                </Text>
              </HStack>
            </Pressable>

            <Pressable
              px="5"
              py="3"
              rounded="md"
              onPress={(event) => {
                props.navigation.navigate(customerDrawer.ordersDrawer);
              }}
            >
              <HStack space="7" alignItems="center">
                <Icon
                  size="5"
                  as={<MaterialCommunityIcons name='form-textbox-password' />}
                />
                <Text
                  fontWeight="500"
                >
                  <Text>All Orders</Text>
                </Text>
              </HStack>
            </Pressable>

          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        // console.log('MyDrawer :: props :: ', props);
        return <CustomDrawerContent {...props} />
      }}>
      <Drawer.Screen name={customerDrawer.homeDrawer} component={Home} />
      <Drawer.Screen name={customerDrawer.ordersDrawer} component={AllOrders} />
    </Drawer.Navigator>
  );
}

export default function CustomerDrawer() {
  return (
    <>
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
    </>
  );
}