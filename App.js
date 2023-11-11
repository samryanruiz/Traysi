import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import SplashScreen from "./screens/SplashScreen";
import MapScreen from "./screens/MapScreen"; // Import MapScreen
import AdditionalSplashScreen from "./components/AdditionalSplashScreen"; // Import AdditionalSplashScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdditionalSplashScreen"
              component={AdditionalSplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
