import * as React from "react";
import { View, StyleSheet, Dimensions, StatusBar, TouchableOpacity, Animated, Pressable, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { NativeBaseProvider, Box, Text, Center, useColorModeValue } from "native-base";
import Constants from "expo-constants";

export default function NBTabView(props) {
  const layout = useWindowDimensions();
  const { index, setIndex, routes, renderScene } = props;

  return <TabView st navigationState={{
    index,
    routes
  }} renderScene={renderScene} onIndexChange={setIndex} initialLayout={{ width: layout.width }}  />;
}