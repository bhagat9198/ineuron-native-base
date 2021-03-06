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
  StatusBar,
} from "native-base";
import { customerDrawer } from "../../constants/navigations";
import Home from "../../views/customer/Home";
import AllOrders from "../../views/customer/Orders";
import { View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Orders from "../../views/customer/Orders";
import Settings from "../../views/customer/Settings";
import Profile from "../../views/customer/Profile";
import AllItems from "../../views/customer/AllItems";
import { useSelector } from "react-redux";
import Signin from "../../views/auth/Signin";
import Logout from "../common/Logout";

const Drawer = createDrawerNavigator();

const showElementScreens = [
  {
    label: 'Shops',
    family: Entypo,
    icon: 'shop',
    view: customerDrawer.bussinessDrawer,
  },
  {
    label: 'Orders',
    family: AntDesign,
    icon: 'shoppingcart',
    view: customerDrawer.ordersDrawer
  }
]


const otherScreens = [
  {
    label: 'Setting',
    family: AntDesign,
    icon: 'setting',
    view: customerDrawer.settingsDrawer
  },
  {
    label: 'Profile',
    family: AntDesign,
    icon: 'user',
    view: customerDrawer.profileDrawer
  },
  {
    label: 'Logout',
    family: AntDesign,
    icon: 'logout',
    view: customerDrawer.logoutDrawer
  }]

const topScreens = [
  {
    label: 'Home',
    family: AntDesign,
    icon: 'home',
    view: customerDrawer.homeDrawer
  }
]


function CustomDrawerContent(props) {
  const reducerData = useSelector(state => state.reducer)
  console.log('CustomDrawerContent :: reducerData :: ', reducerData);
  return (
    <DrawerContentScrollView {...props}  >
      <VStack space="6" my="2" mx="1">
        <Box px="4">
          <Text bold color="gray.700">
            {reducerData?.userData && reducerData?.userData?.fullName}
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
            {reducerData?.userData && reducerData?.userData?.email}
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
                  // fontWeight="500"
                  >
                    {screen.label}
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
                  // fontWeight="500"
                  >
                    {screen.label}
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
                  // fontWeight="500"
                  >
                    {screen.label}
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
      {/* <Drawer.Screen name={customerDrawer.homeDrawer} component={Home} /> */}
      <Drawer.Screen name={customerDrawer.ordersDrawer} component={Orders} />
      <Drawer.Screen name={customerDrawer.bussinessDrawer} component={AllItems} />
      <Drawer.Screen name={customerDrawer.settingsDrawer} component={Settings} />
      <Drawer.Screen name={customerDrawer.profileDrawer} component={Profile} />
      <Drawer.Screen name={customerDrawer.logoutDrawer} component={Logout} />

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