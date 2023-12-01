import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import ICON from "./assets/icon.png";

import SplashScreen from "./screens/SplashScreen";
import MapScreen from "./screens/MapScreen";
import AdditionalSplashScreen from "./screens/AdditionalSplashScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* Only one main navigator should be directly inside NavigationContainer */}
        <Drawer.Navigator
          drawerContent={(props) => {
            return (
              <SafeAreaView>
                <View
                  style={{
                    height: 200,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "white",
                    borderBottomWidth: 2,
                  }}
                >
                  <Image
                    source={ICON}
                    style={{
                      height: 90,
                      width: 112,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      marginVertical: 20,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    E-TRAYSI
                  </Text>
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            );
          }}
          screenOptions={{
            drawerStyle: {
              backgroundColor: "#5FC0DE",
              width: 250,
            },
            headerStyle: {
              backgroundColor: "#5FC0DE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            drawerLabelStyle: {
              color: "white",
            },
          }}
        >
          {/* Define screens inside Drawer.Navigator */}
          <Drawer.Screen name="Traysi" component={MainStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// Separate Stack.Navigator for your main screens
function MainStackScreen() {
  return (
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
  );
}
