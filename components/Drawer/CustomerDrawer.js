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
import { customerDrawer } from "../../constants/navigations";
import Home from "../../views/customer/Home";
import AllOrders from "../../views/customer/Orders";
import { View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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