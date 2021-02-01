import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MyStack } from "./app/components/StackNavigator_";
import ContextApiFct_ from "./app/components/ContextApiFct_";

export default function App() {
  return (
    <ContextApiFct_>
      <NavigationContainer>
        <MyStack />


         <StatusBar style="auto" />
      </NavigationContainer>
    </ContextApiFct_>
  );
}
