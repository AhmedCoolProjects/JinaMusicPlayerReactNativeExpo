import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {  View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import HomePage_ from "../screens/HomePage_";
import ListPage_ from "../screens/ListPage_";
import RoomPlayed_ from "../screens/RoomPlayed_";
import { Colors , Dim_} from './Constants_'

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:Colors.header,
          elevation: 0,
        },
        headerTintColor: Colors.title,
      }}
    >
      {/* this is the home screen for the stack navigation in the top */}
      <Stack.Screen
        name="Home"
        component={HomePage_}
        options={{
          title: "Jina Music Player",
          headerRight: () => {
            return (
              <View style={{ marginRight: 15 }}>

                <Feather name="youtube" size={24} color={Colors.title} />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="ListPage"
        component={ListPage_ }
        options={() => ({
          headerRight: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  width: Dim_.widthWindow / 3,
                  justifyContent: "space-around",
                }}
              >
                <Feather name="phone" size={24} color="black" />
                <Feather name="video" size={24} color="black" />
                <Feather name="more-vertical" size={24} color="black" />
              </View>
            );
          },
        })}
      />
      <Stack.Screen
        name="RoomPlayed"
        component={RoomPlayed_ }
        options={() => ({
          // title: route.params.name,
          headerRight: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  width: Dim_.widthWindow / 3,
                  justifyContent: "space-around",
                }}
              >
                <Feather name="phone" size={24} color="black" />
                <Feather name="video" size={24} color="black" />
                <Feather name="more-vertical" size={24} color="black" />
              </View>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
}
