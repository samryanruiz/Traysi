import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import iconImage from "../assets/icon.png";
import titleImage from "../assets/ETRAYSI.png"; // Import your title image

import AdditionalSplashScreen from "../components/AdditionalSplashScreen";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      clearTimeout(splashTimeout);
      navigation.replace("AdditionalSplashScreen");
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 200,
          height: 200,
          resizeMode: "contain",
        }}
        source={iconImage}
      />
      <Image
        style={{
          width: 200, // Adjust the width as needed
          height: 50, // Adjust the height as needed
          resizeMode: "contain",
        }}
        source={titleImage} // Use your title image source
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5FC0DE",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
