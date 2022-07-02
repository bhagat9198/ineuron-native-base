import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
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
import { bussinessDrawer, customerDrawer } from "../../constants/navigations";
import { View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "../../views/bussiness/Home";
import AddItem from "../../views/bussiness/AddItem";
import ManageItems from "../../views/bussiness/ManageItems";
import AddBussiness from "../../views/bussiness/AddBussiness";
import ManageOrders from "../../views/bussiness/ManageOrders";
import Settings from "../../views/bussiness/Settings";
import Profile from "../../views/bussiness/Profile";

const Drawer = createDrawerNavigator();

const showElementScreens = [
  {
    label: 'Manage Items',
    family: MaterialCommunityIcons,
    icon: 'semantic-web',
    view: bussinessDrawer.manageItemsDrawer,
  },
  {
    label: 'Manage orders',
    family: AntDesign,
    icon: 'shoppingcart',
    view: bussinessDrawer.manageOrdersDrawer
  }
]

const addElementScreens = [
  {
    label: 'Add Item',
    family: Ionicons,
    icon: 'add',
    view: bussinessDrawer.addItemDrawer
  },
  {
    label: 'Add Bussiness',
    family: Entypo,
    icon: 'address',
    view: bussinessDrawer.addBussinessDrawer
  }
]

const otherScreens = [
  {
    label: 'Setting',
    family: AntDesign,
    icon: 'setting',
    view: bussinessDrawer.settingsDrawer
  },
  {
    label: 'Profile',
    family: AntDesign,
    icon: 'user',
    view: bussinessDrawer.profileDrawer
  }]

const topScreens = [
  {
    label: 'Home',
    family: AntDesign,
    icon: 'home',
    view: bussinessDrawer.homeDrawer
  }
]


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
            {topScreens.map(screen =>
              <Pressable
                key={screen.label}
                px="5"
                py="3"
                rounded="md"
                onPress={(event) => {
                  props.navigation.navigate(screen.view);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    size="5"
                    as={<screen.family name={screen.icon} />}
                  />
                  <Text
                    fontWeight="500"
                  >
                    <Text>{screen.label}</Text>
                  </Text>
                </HStack>
              </Pressable>
            )}
          </VStack>
          <VStack space="5">
            {showElementScreens.map(screen =>
              <Pressable
                key={screen.label}
                px="5"
                py="3"
                rounded="md"
                onPress={(event) => {
                  props.navigation.navigate(screen.view);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    size="5"
                    as={<screen.family name={screen.icon} />}
                  />
                  <Text
                    fontWeight="500"
                  >
                    <Text>{screen.label}</Text>
                  </Text>
                </HStack>
              </Pressable>
            )}
          </VStack>
          <VStack space="5">
            {addElementScreens.map(screen =>
              <Pressable
                key={screen.label}
                px="5"
                py="3"
                rounded="md"
                onPress={(event) => {
                  props.navigation.navigate(screen.view);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    size="5"
                    as={<screen.family name={screen.icon} />}
                  />
                  <Text
                    fontWeight="500"
                  >
                    <Text>{screen.label}</Text>
                  </Text>
                </HStack>
              </Pressable>
            )}
          </VStack>
          <VStack space="5">
            {otherScreens.map(screen =>
              <Pressable
                key={screen.label}
                px="5"
                py="3"
                rounded="md"
                onPress={(event) => {
                  props.navigation.navigate(screen.view);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    size="5"
                    as={<screen.family name={screen.icon} />}
                  />
                  <Text
                    fontWeight="500"
                  >
                    <Text>{screen.label}</Text>
                  </Text>
                </HStack>
              </Pressable>
            )}
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
      <Drawer.Screen name={bussinessDrawer.homeDrawer} component={Home} />
      <Drawer.Screen name={bussinessDrawer.addItemDrawer} component={AddItem} />
      <Drawer.Screen name={bussinessDrawer.manageItemsDrawer} component={ManageItems} />
      <Drawer.Screen name={bussinessDrawer.addBussinessDrawer} component={AddBussiness} />
      <Drawer.Screen name={bussinessDrawer.manageOrdersDrawer} component={ManageOrders} />
      <Drawer.Screen name={bussinessDrawer.settingsDrawer} component={Settings} />
      <Drawer.Screen name={bussinessDrawer.profileDrawer} component={Profile} />
    </Drawer.Navigator>
  );
}

export default function BussinessDrawer() {
  return (
    <>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </>
  );
}